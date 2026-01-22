export const Home = {
    view: () => `
      <main>
      <section class="home-hero">
        <div class="home-glow home-glow--primary"></div>
        <div class="home-glow home-glow--secondary"></div>

        <div class="container home-hero__grid">
          <div class="home-hero__copy">
            <h1 class="home-title animate-fade-in">Sua leitura, iluminada.</h1>
            <p class="home-subtitle animate-fade-in" style="animation-delay: 0.2s; opacity: 0;">
              Lumen Reader é o leitor de ebooks e documentos definitivo, projetado para performance, privacidade e uma experiência visual imersiva.
            </p>

            <div class="home-cta animate-fade-in" style="animation-delay: 0.35s; opacity: 0;">
              <a id="download-button" href="#" class="btn-primary" aria-label="Baixar aplicativo">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16L12 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9 13L12 16L15 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5L19 9.5V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Baixar APK</span>
              </a>

              <div class="home-meta glass-panel" style="min-height: 140px; width: 100%;">

                <div class="home-meta__top">
                  <span>Versão: <b id="app-version">Carregando...</b></span>
                  <span>Lançamento: <b id="release-date">Carregando...</b></span>
                </div>
                <div class="home-meta__body">
                  <p class="home-meta__label">Novidades:</p>
                  <ul id="changelog" class="home-meta__list">
                    <li>Carregando...</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="home-hero__media">
            <div class="home-device glass-panel">
              <div class="home-device__header">
                <span class="home-device__dot"></span>
                <span class="home-device__dot"></span>
                <span class="home-device__dot"></span>
              </div>
              <div class="home-device__content">
                <p class="home-device__title">Screenshots do app</p>
                <p class="home-device__hint">Navegue pelas telas principais do app.</p>

                <div class="home-carousel" data-screenshots>
                  <button class="home-carousel__btn home-carousel__btn--prev" type="button" aria-label="Anterior">‹</button>
                  <button class="home-carousel__btn home-carousel__btn--next" type="button" aria-label="Próximo">›</button>

                  <div class="home-carousel__viewport">
                    <img src="/screenshots/01.webp" class="home-carousel__img" data-screenshot-img alt="Screenshot do Lumen Reader" loading="eager" fetchpriority="high" width="320" height="680" />
                    <div class="home-carousel__fallback" data-screenshot-fallback>Adicione as imagens em <b>public/screenshots</b></div>
                  </div>

                  <div class="home-carousel__dots" data-screenshot-dots></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="home-section">

        <div class="container">
          <div class="home-section__header">
            <h2 class="home-section__title">Feito para ler melhor</h2>
            <p class="home-section__subtitle">Experiência limpa, rápida e com foco total na sua privacidade.</p>
          </div>

          <div class="home-features">
            <div class="glass-panel home-feature">
              <h2 class="home-feature__title" style="color: var(--accent-blue); font-size: 1.5rem;">Leve & Rápido</h2>
              <p class="home-feature__text">Abre rápido e roda fluido, mesmo em aparelhos modestos.</p>
            </div>
            <div class="glass-panel home-feature">
              <h2 class="home-feature__title" style="color: var(--accent-violet); font-size: 1.5rem;">Privacidade primeiro</h2>
              <p class="home-feature__text">Seus documentos ficam no seu dispositivo. Sem telemetria invasiva.</p>
            </div>
            <div class="glass-panel home-feature">
              <h2 class="home-feature__title" style="font-size: 1.5rem;">Design fluido</h2>
              <p class="home-feature__text">Interface minimalista que se adapta ao seu fluxo de leitura.</p>
            </div>
          </div>

        </div>
      </section>

      </main>
    `,

    afterRender: async () => {
      // Re-run the update checker
      if (window.UpdateChecker) {
        const checker = new window.UpdateChecker();
        await checker.updatePageElements();
      } else {
        console.warn("UpdateChecker not found in window");
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
        // Dynamic import to keep initial bundle small or standard import if preferred. 
        // Using standard import at top is better, but since this is an object literal export, 
        // we can import at top of file. 
        // For now, let's assume we need to import it.
        const { CarouselController } = await import('../components/CarouselController.js');
        new CarouselController(carouselEl, screenshots).mount();
      }
    }
  };
