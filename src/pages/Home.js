export const Home = {
    view: () => `
      <main>
        <section class="home-hero">
          <div class="container">
            <!-- MASSIVE TYPOGRAPHY -->
            <div class="hero-layer hero-title-wrapper">
              <h1 class="text-massive animate-fade-in">LUMEN</h1>
            </div>

            <!-- OVERLAPPING CONTENT -->
            <div class="hero-layer hero-content-wrapper fade-in" style="animation-delay: 0.2s;">
              
              <!-- LEFT: Action & Meta -->
              <div class="hero-actions">
                <p class="text-subtitle" style="margin-bottom: 32px; color: var(--text-main); font-size: 1.5rem; text-transform: uppercase; font-weight: 700;">
                  Leitura Iluminada. <span style="color: var(--accent);">//</span>
                </p>
                <p class="text-subtitle" style="margin-bottom: 40px; border-left: 2px solid var(--accent); padding-left: 20px;">
                  Performance extrema, privacidade total e design focado para Android e iOS.
                </p>

                <div style="display: flex; gap: 16px; margin-bottom: 48px; flex-wrap: wrap;">
                  <a id="download-button" href="#" class="btn-primary" aria-label="Baixar aplicativo">
                     <span>BAIXAR APK</span>
                     <span>↓</span>
                  </a>
                  <a href="#features" class="btn-secondary">
                    Sobre o App
                  </a>
                </div>

                <!-- Technical Meta Box -->
                <div class="meta-box">
                  <div class="meta-code">
                    <span>STATUS: </span><b style="color: #00ff00;">STABLE</b><br>
                    <span>VERSION: </span><b id="app-version">LOADING...</b><br>
                    <span>BUILD_DATE: </span><b id="release-date">...</b>
                  </div>
                  <ul id="changelog" class="meta-code meta-list">
                    <li>Fetching latest manifest...</li>
                  </ul>
                </div>
              </div>

              <!-- RIGHT: Technical Device Frame -->
              <div class="hero-media">
                <div class="device-frame" data-screenshots>
                  <div class="device-header">
                    <span class="dot active"></span>
                    <span class="dot"></span>
                  </div>
                  
                  <div class="carousel-viewport">
                    <img src="/screenshots/01.webp" class="carousel-img" data-screenshot-img alt="App Interface" loading="eager" />
                  </div>

                  <!-- Navigation Logic will be attached here -->
                  <div class="carousel-nav">
                    <button class="carousel-btn carousel-btn-prev" aria-label="Anterior">↑</button>
                    <button class="carousel-btn carousel-btn-next" aria-label="Próximo">↓</button>
                  </div>
                  
                  <!-- Dots Container -->
                  <div style="position: absolute; bottom: 10px; left: 0; width: 100%; display: flex; justify-content: center; gap: 6px;" data-screenshot-dots>
                    <!-- Injected by JS -->
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <!-- FEATURES SECTION: Brutalist Grid -->
        <section id="features" class="section">
          <div class="container">
            <header class="section-header">
              <h2 class="section-title">ESPECIFICAÇÕES</h2>
              <p class="text-subtitle">Arquitetura de alta performance para leitores exigentes.</p>
            </header>

            <div class="features-grid">
              <article class="feature-card">
                <h3 class="feature-title"><span>01.</span> VELOCIDADE</h3>
                <p class="feature-desc">Engine de renderização otimizada. Abre EPUBs de 50MB+ instantaneamente sem travamentos.</p>
              </article>
              
              <article class="feature-card">
                <h3 class="feature-title"><span>02.</span> PRIVACIDADE</h3>
                <p class="feature-desc">Offline-first. Seus arquivos nunca deixam seu dispositivo. Sem tracking. Sem ads.</p>
              </article>
              
              <article class="feature-card">
                <h3 class="feature-title"><span>03.</span> FORMATOS</h3>
                <p class="feature-desc">Suporte nativo para EPUB, PDF, TXT com parser inteligente de metadados.</p>
              </article>

              <article class="feature-card" style="background: var(--bg-surface);">
                 <h3 class="feature-title" style="color: var(--accent);"><span>//</span> OPEN SOURCE</h3>
                 <p class="feature-desc">Código auditável e transparente. Construído pela comunidade para a comunidade.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
    `,

    afterRender: async () => {
      // Re-run the update checker logic
      if (window.UpdateChecker) {
        const checker = new window.UpdateChecker();
        await checker.updatePageElements();
      } else {
        console.warn("UpdateChecker system not initialized");
      }

      // Initialize Carousel
      const screenshots = [
        { label: 'Leitura', src: '/screenshots/01.webp' },
        { label: 'Biblioteca', src: '/screenshots/02.webp' },
        { label: 'Detalhes', src: '/screenshots/03.webp' },
        { label: 'Hábitos', src: '/screenshots/04.webp' },
        { label: 'Arquivos', src: '/screenshots/05.webp' }
      ];

      const carouselEl = document.querySelector('[data-screenshots]');
      if (carouselEl) {
        const { CarouselController } = await import('../components/CarouselController.js');
        new CarouselController(carouselEl, screenshots).mount();
      }
    }
  };
