const fs = require('fs');

const heroContent = `---
// Hero.astro
---

<section class="hero-section">
  <!-- Subtle Radial Glows -->
  <div class="hero-glow"></div>
  <div class="hero-glow-secondary"></div>

  <!-- Futuristic Background AI Decorations & Circuit Mesh -->
  <div class="hero-bg-decorations" aria-hidden="true">
    
    <!-- AI Background Illustration -->
    <div class="bg-illustration animate-fade-in" style="animation-duration: 1.5s;">
      <img src="/images/hero-bg-ai.jpg" alt="AI Core" class="hero-bg-img" />
    </div>

    <!-- Top-Left Card: AI Neural Engine -->
    <div class="floating-tech-card card-left-top animate-fade-in" style="animation-delay: 200ms;">
      <div class="tech-card-icon icon-blue">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
          <circle cx="12" cy="12" r="4"/>
        </svg>
      </div>
      <div class="tech-card-info">
        <span class="tech-card-label">AI Neural Engine</span>
        <span class="tech-card-status"><span class="status-dot"></span> Active • 99.8%</span>
      </div>
    </div>

    <!-- Bottom-Left Card: Smart Automation -->
    <div class="floating-tech-card card-left-bottom animate-fade-in" style="animation-delay: 450ms;">
      <div class="tech-card-icon icon-cyan">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      </div>
      <div class="tech-card-info">
        <span class="tech-card-label">Smart Automation</span>
        <span class="tech-card-val">+340% Efisiensi</span>
      </div>
    </div>

    <!-- Top-Right Card: Cloud Sync Pipeline -->
    <div class="floating-tech-card card-right-top animate-fade-in" style="animation-delay: 350ms;">
      <div class="tech-card-icon icon-purple">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"/>
          <polyline points="2 17 12 22 22 17"/>
          <polyline points="2 12 17 22 12"/>
        </svg>
      </div>
      <div class="tech-card-info">
        <span class="tech-card-label">Data Integration</span>
        <span class="tech-card-status"><span class="status-dot pulse-purple"></span> Real-time Sync</span>
      </div>
    </div>

    <!-- Bottom-Right Card: Modern Web & App Stack -->
    <div class="floating-tech-card card-right-bottom animate-fade-in" style="animation-delay: 600ms;">
      <div class="tech-card-icon icon-emerald">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      </div>
      <div class="tech-card-info">
        <span class="tech-card-label">Modern Web Stack</span>
        <span class="tech-card-status"><span class="status-dot pulse-emerald"></span> High Speed</span>
      </div>
    </div>

    <!-- SVG Circuit Lines & Glowing Paths -->
    <svg class="bg-circuit-svg" viewBox="0 0 1440 700" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="circuit-grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3984ff" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#39d5e8" stop-opacity="0.05"/>
        </linearGradient>
        <linearGradient id="circuit-grad-purple" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#3984ff" stop-opacity="0.05"/>
        </linearGradient>
      </defs>

      <!-- Left Circuit Network -->
      <path class="circuit-path line-anim-1" d="M60 180 H 220 L 280 240 V 380 L 220 440 H 80" stroke="url(#circuit-grad-blue)" stroke-width="1.5" stroke-dasharray="6 6"/>
      <circle cx="220" cy="180" r="4" fill="#3984ff" class="node-glow"/>
      <circle cx="280" cy="240" r="3" fill="#39d5e8"/>
      <circle cx="280" cy="380" r="4" fill="#3984ff" class="node-glow"/>

      <!-- Right Circuit Network -->
      <path class="circuit-path line-anim-2" d="M1380 200 H 1220 L 1160 260 V 400 L 1220 460 H 1360" stroke="url(#circuit-grad-purple)" stroke-width="1.5" stroke-dasharray="6 6"/>
      <circle cx="1220" cy="200" r="4" fill="#8b5cf6" class="node-glow"/>
      <circle cx="1160" cy="260" r="3" fill="#3984ff"/>
      <circle cx="1160" cy="400" r="4" fill="#39d5e8" class="node-glow"/>

      <!-- Center Ambient Orbit Curve -->
      <path class="orbit-path" d="M220 560 C 500 460, 940 460, 1220 560" stroke="url(#circuit-grad-blue)" stroke-width="1.5" stroke-dasharray="4 8" opacity="0.45"/>
    </svg>
  </div>

  <div class="hero-container">
    <!-- Tech Badge -->
    <div class="hero-badge animate-fade-in" style="animation-delay: 100ms;">
      <svg
        class="badge-icon"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
          fill="currentColor"></path>
      </svg>
      <span class="badge-text">DIGITAL TRANSFORMATION AGENCY</span>
    </div>

    <!-- Heading -->
    <h1 class="hero-heading animate-fade-in" style="animation-delay: 250ms;">
      Transformasi Digital<br />
      Masa Depan dengan <span class="text-blue">AI</span><br />
      <span class="text-blue">& Teknologi Terdepan</span>
    </h1>

    <!-- Description -->
    <p class="hero-description animate-fade-in" style="animation-delay: 400ms;">
      Kami membantu bisnis Anda berkembang lebih cepat dan efisien melalui
      otomatisasi cerdas, pengembangan web mutakhir, dan strategi pemasaran
      digital yang digerakkan oleh data.
    </p>

    <!-- CTA Buttons -->
    <div class="hero-actions animate-fade-in" style="animation-delay: 550ms;">
      <a href="/contact/" class="cta-primary">Mulai Konsultasi</a>
      <a href="#keunggulan" class="cta-secondary">Pelajari Layanan</a>
    </div>
  </div>
</section>

<style>
  /* Hero Section Wrapper */
  .hero-section {
    position: relative;
    width: 100%;
    min-height: calc(100vh - 72px);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--bg-primary);
    overflow: hidden;
    padding: 80px 24px;
    box-sizing: border-box;
  }

  .hero-section::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(57, 132, 255, 0.035) 1px, transparent 1px),
      linear-gradient(90deg, rgba(57, 132, 255, 0.035) 1px, transparent 1px);
    background-size: 56px 56px;
    opacity: 0.7;
    pointer-events: none;
    z-index: 0;
  }

  /* Radial Glow Backgrounds */
  .hero-glow {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 850px;
    height: 850px;
    background:
      radial-gradient(
        circle at 50% 45%,
        rgba(57, 132, 255, 0.08) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 20% 75%,
        rgba(57, 213, 232, 0.04) 0%,
        transparent 40%
      );
    pointer-events: none;
    z-index: 1;
  }

  .hero-glow-secondary {
    position: absolute;
    top: 30%;
    right: 10%;
    width: 450px;
    height: 450px;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.04) 0%, transparent 70%);
    pointer-events: none;
    z-index: 1;
  }

  /* Background Decorations Layer */
  .hero-bg-decorations {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    max-width: 1440px;
    margin: 0 auto;
    left: 0;
    right: 0;
    pointer-events: none;
    z-index: 1;
  }

  /* Image Illustration */
  .bg-illustration {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.06; /* Highly lowered opacity to prevent text clashing */
  }

  .hero-bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    mix-blend-mode: screen;
    mask-image: radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 75%);
    -webkit-mask-image: radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 75%);
  }

  /* SVG Circuit styling */
  .bg-circuit-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  .node-glow {
    filter: drop-shadow(0 0 6px rgba(57, 132, 255, 0.6));
    animation: pulseNode 3s infinite ease-in-out;
  }

  @keyframes pulseNode {
    0%, 100% { r: 4px; opacity: 0.7; }
    50% { r: 5.5px; opacity: 1; filter: drop-shadow(0 0 10px rgba(57, 132, 255, 0.9)); }
  }

  /* Floating Glassmorphic Tech Cards */
  .floating-tech-card {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 16px;
    background: rgba(10, 22, 44, 0.65);
    border: 1px solid rgba(57, 132, 255, 0.2);
    border-radius: 12px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow:
      0 10px 30px rgba(0, 0, 0, 0.35),
      0 0 20px rgba(57, 132, 255, 0.05);
    pointer-events: auto;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;
    z-index: 2;
  }

  .floating-tech-card:hover {
    border-color: rgba(57, 132, 255, 0.5);
    transform: translateY(-4px) scale(1.03);
    box-shadow:
      0 14px 36px rgba(0, 0, 0, 0.45),
      0 0 25px rgba(57, 132, 255, 0.15);
  }

  .tech-card-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 8px;
    background: rgba(57, 132, 255, 0.12);
    color: var(--accent-blue);
    flex-shrink: 0;
  }

  .icon-blue {
    background: rgba(57, 132, 255, 0.12);
    color: #3984ff;
  }

  .icon-cyan {
    background: rgba(57, 213, 232, 0.12);
    color: #39d5e8;
  }

  .icon-purple {
    background: rgba(139, 92, 246, 0.12);
    color: #a855f7;
  }

  .icon-emerald {
    background: rgba(34, 197, 94, 0.12);
    color: #22c55e;
  }

  .tech-card-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
    text-align: left;
  }

  .tech-card-label {
    font-family: 'Inter', sans-serif;
    font-size: 11px;
    font-weight: 500;
    color: var(--text-secondary);
    letter-spacing: 0.2px;
  }

  .tech-card-status, .tech-card-val {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: var(--text-primary);
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #22c55e;
    box-shadow: 0 0 6px #22c55e;
  }

  .pulse-purple {
    background-color: #a855f7;
    box-shadow: 0 0 6px #a855f7;
  }

  .pulse-emerald {
    background-color: #22c55e;
    box-shadow: 0 0 6px #22c55e;
  }

  /* Card Absolute Placements */
  .card-left-top {
    top: 22%;
    left: 4%;
    animation: floatCard1 6s ease-in-out infinite;
  }

  .card-left-bottom {
    bottom: 24%;
    left: 6%;
    animation: floatCard2 7s ease-in-out infinite;
  }

  .card-right-top {
    top: 20%;
    right: 4%;
    animation: floatCard3 6.5s ease-in-out infinite;
  }

  .card-right-bottom {
    bottom: 22%;
    right: 5%;
    animation: floatCard4 7.5s ease-in-out infinite;
  }

  @keyframes floatCard1 {
    0%, 100% { transform: translateY(0px) rotate(-0.5deg); }
    50% { transform: translateY(-10px) rotate(0.5deg); }
  }

  @keyframes floatCard2 {
    0%, 100% { transform: translateY(0px) rotate(0.5deg); }
    50% { transform: translateY(-8px) rotate(-0.5deg); }
  }

  @keyframes floatCard3 {
    0%, 100% { transform: translateY(0px) rotate(-0.5deg); }
    50% { transform: translateY(-11px) rotate(0.5deg); }
  }

  @keyframes floatCard4 {
    0%, 100% { transform: translateY(0px) rotate(0.5deg); }
    50% { transform: translateY(-9px) rotate(-0.5deg); }
  }

  /* Main Centered Container */
  .hero-container {
    position: relative;
    z-index: 3;
    max-width: 900px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  /* Tech Badge */
  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 14px;
    background: rgba(7, 16, 32, 0.5);
    border: 1px solid #25436c;
    border-radius: 999px;
    margin-bottom: 34px; /* spacing: 30px-36px */
    backdrop-filter: blur(4px);
    box-sizing: border-box;
  }

  .badge-icon {
    color: var(--accent-blue);
    flex-shrink: 0;
  }

  .badge-text {
    font-family: "Inter", monospace;
    font-size: 10.5px;
    font-weight: 600;
    color: var(--accent-blue);
    letter-spacing: 1.5px;
    line-height: 1;
  }

  /* Large Typography Heading */
  .hero-heading {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 70px; /* target desktop: 64px - 72px */
    font-weight: 800;
    line-height: 1; /* target: 0.95 - 1.05 */
    letter-spacing: -2.5px; /* target: -2px to -3px */
    color: var(--text-primary);
    margin: 0 0 25px 0; /* spacing: 22px-28px */
    text-transform: none;
    text-shadow: 0 4px 32px rgba(0, 0, 0, 0.7);
  }

  .text-blue {
    color: var(--accent-blue);
  }

  /* Description */
  .hero-description {
    font-family: "Inter", sans-serif;
    font-size: 15px; /* target: 14px - 16px */
    line-height: 1.8; /* target: 1.8 */
    color: #6682b3; /* muted blue-gray */
    max-width: 600px; /* target: 600px */
    margin: 0 0 35px 0; /* spacing: 32px-38px */
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  }

  /* CTA Buttons */
  .hero-actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px; /* target: 12px gap */
    width: 100%;
  }

  .cta-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: var(--accent-blue);
    color: #ffffff;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 14px;
    font-weight: 700;
    height: 44px;
    padding: 0 24px;
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 0 0 0 rgba(57, 132, 255, 0);
  }

  .cta-primary:hover {
    background: var(--accent-bright);
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(57, 132, 255, 0.35);
  }

  .cta-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 1px solid #34415a;
    color: #ffffff;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 14px;
    font-weight: 700;
    height: 44px;
    padding: 0 24px;
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .cta-secondary:hover {
    background: var(--blue-dark-10);
    border-color: var(--accent-blue);
    transform: translateY(-1px);
  }

  /* Entrance Animation CSS classes */
  .animate-fade-in {
    opacity: 0;
    transform: translateY(15px);
    animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Light Theme Adjustments */
  :global(html[data-theme="light"]) .floating-tech-card {
    background: rgba(255, 255, 255, 0.85);
    border-color: rgba(226, 232, 240, 0.9);
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.07);
  }

  :global(html[data-theme="light"]) .floating-tech-card:hover {
    border-color: var(--accent-blue);
    box-shadow: 0 14px 34px rgba(0, 85, 255, 0.12);
  }

  :global(html[data-theme="light"]) .hero-description {
    color: #475569;
  }
  
  :global(html[data-theme="light"]) .hero-bg-img {
    mix-blend-mode: multiply;
    opacity: 0.15;
    filter: invert(1);
    mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 65%);
    -webkit-mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 65%);
  }
  
  :global(html[data-theme="light"]) .hero-heading {
    text-shadow: none;
  }
  
  :global(html[data-theme="light"]) .hero-description {
    text-shadow: none;
  }

  /* Responsive Design styling */
  @media (max-width: 1200px) {
    .card-left-top { left: 2%; top: 15%; }
    .card-left-bottom { left: 2%; bottom: 18%; }
    .card-right-top { right: 2%; top: 15%; }
    .card-right-bottom { right: 2%; bottom: 18%; }
  }

  @media (max-width: 991px) {
    .hero-heading {
      font-size: 56px; /* tablet: 52px - 60px */
      letter-spacing: -1.5px;
    }

    .floating-tech-card {
      padding: 8px 12px;
      transform: scale(0.9);
    }

    .card-left-top { top: 10%; left: 1%; }
    .card-right-top { top: 10%; right: 1%; }
    .card-left-bottom { bottom: 10%; left: 1%; }
    .card-right-bottom { bottom: 10%; right: 1%; }
  }

  @media (max-width: 767px) {
    .floating-tech-card {
      display: none; /* Hide floating cards on small screens to keep typography unobstructed */
    }

    .bg-circuit-svg {
      opacity: 0.4;
    }
  }

  @media (max-width: 575px) {
    .hero-section {
      padding: 40px 16px;
    }

    .hero-badge {
      margin-bottom: 24px;
    }

    .hero-heading {
      font-size: 40px; /* mobile: 40px - 48px */
      letter-spacing: -1px;
      margin-bottom: 20px;
    }

    .hero-description {
      font-size: 14px;
      margin-bottom: 28px;
    }

    .hero-actions {
      flex-direction: column;
      gap: 12px;
    }

    .cta-primary,
    .cta-secondary {
      width: 100%;
      box-sizing: border-box;
    }
  }
</style>
\`;

fs.writeFileSync('src/components/Hero.astro', heroContent);
