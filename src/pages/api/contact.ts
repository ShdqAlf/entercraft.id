export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentType = request.headers.get('content-type') || '';
    let payload: Record<string, any> = {};

    if (contentType.includes('application/json')) {
      payload = await request.json();
    } else if (
      contentType.includes('application/x-www-form-urlencoded') ||
      contentType.includes('multipart/form-data')
    ) {
      const formData = await request.formData();
      payload = Object.fromEntries(formData.entries());
      payload.consent =
        formData.get('consent') === 'on' ||
        formData.get('consent') === 'true' ||
        formData.get('consent') === true;
    } else {
      return new Response(JSON.stringify({ error: 'Unsupported Content-Type' }), {
        status: 415,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 1. Honeypot check: If bot fills hidden 'website' field, silently drop (return 200 OK)
    if (payload.website && String(payload.website).trim() !== '') {
      return new Response(JSON.stringify({ success: true, message: 'Message received' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 2. Cloudflare Turnstile Verification
    const turnstileToken = payload['cf-turnstile-response'];
    const turnstileSecret =
      import.meta.env.TURNSTILE_SECRET_KEY || process.env.TURNSTILE_SECRET_KEY;

    // Verify Turnstile token if TURNSTILE_SECRET_KEY is configured
    if (turnstileSecret) {
      if (!turnstileToken) {
        return new Response(
          JSON.stringify({ error: 'Silakan selesaikan verifikasi keamanan (Turnstile).' }),
          {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          }
        );
      }

      const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0].trim();
      const verifyFormData = new URLSearchParams();
      verifyFormData.append('secret', turnstileSecret);
      verifyFormData.append('response', String(turnstileToken));
      if (clientIp) {
        verifyFormData.append('remoteip', clientIp);
      }

      const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        body: verifyFormData,
      });

      const verifyData = await verifyRes.json();
      if (!verifyData.success) {
        return new Response(
          JSON.stringify({ error: 'Verifikasi keamanan gagal. Silakan coba lagi.' }),
          {
            status: 403,
            headers: { 'Content-Type': 'application/json' },
          }
        );
      }
    }

    // 3. Webhook endpoint destination
    const n8nWebhookUrl =
      import.meta.env.N8N_WEBHOOK_URL ||
      process.env.N8N_WEBHOOK_URL ||
      import.meta.env.PUBLIC_N8N_WEBHOOK_URL ||
      process.env.PUBLIC_N8N_WEBHOOK_URL;

    if (!n8nWebhookUrl) {
      console.error('N8N_WEBHOOK_URL is not configured in environment variables');
      return new Response(JSON.stringify({ error: 'Layanan belum dikonfigurasi dengan benar.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Sanitize payload forwarded to n8n (exclude security and internal honeypot fields)
    const { website, 'cf-turnstile-response': _, ...cleanPayload } = payload;

    const n8nSecret =
      import.meta.env.N8N_WEBHOOK_SECRET || process.env.N8N_WEBHOOK_SECRET;

    const n8nHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (n8nSecret) {
      n8nHeaders['X-Webhook-Secret'] = n8nSecret;
    }

    const n8nResponse = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: n8nHeaders,
      body: JSON.stringify(cleanPayload),
    });

    if (!n8nResponse.ok) {
      console.error(`n8n webhook error: ${n8nResponse.status} ${n8nResponse.statusText}`);
      return new Response(JSON.stringify({ error: 'Gagal meneruskan pesan ke server lead.' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('API /api/contact error:', error);
    return new Response(JSON.stringify({ error: 'Terjadi kesalahan pada server.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
