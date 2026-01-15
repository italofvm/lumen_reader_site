export const Home = {
    view: () => `
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
              <a id="download-button" href="#" class="btn-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16L12 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9 13L12 16L15 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5L19 9.5V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Baixar APK</span>
              </a>

              <div class="home-meta glass-panel">
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
                    <img class="home-carousel__img" data-screenshot-img alt="Screenshot do app" loading="lazy" />
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
              <h3 class="home-feature__title" style="color: var(--accent-blue);">Leve & Rápido</h3>
              <p class="home-feature__text">Abre rápido e roda fluido, mesmo em aparelhos modestos.</p>
            </div>
            <div class="glass-panel home-feature">
              <h3 class="home-feature__title" style="color: var(--accent-violet);">Privacidade primeiro</h3>
              <p class="home-feature__text">Seus documentos ficam no seu dispositivo. Sem telemetria invasiva.</p>
            </div>
            <div class="glass-panel home-feature">
              <h3 class="home-feature__title">Design fluido</h3>
              <p class="home-feature__text">Interface minimalista que se adapta ao seu fluxo de leitura.</p>
            </div>
          </div>
        </div>
      </section>

    `,
    afterRender: async () => {
      // Re-run the update checker in case the elements were added after DOMContentLoaded
      if (window.UpdateChecker) {
        const checker = new window.UpdateChecker();
        await checker.updatePageElements();
      } else {
        // If not global yet (rare in this setup), we can just wait a bit or try to use the one from index.html if it's there
        console.warn("UpdateChecker not found in window");
      }

      const screenshots = [
        { label: 'Leitura', base: '/screenshots/01' },
        { label: 'Assistente IA', base: '/screenshots/02' },
        { label: 'Resumo', base: '/screenshots/03' },
        { label: 'Biblioteca', base: '/screenshots/04' },
        { label: 'Configurações', base: '/screenshots/05' },
        { label: 'Aparência', base: '/screenshots/06' }
      ];

      const extensions = ['webp', 'png', 'jpg', 'jpeg'];
      const resolveImageSrc = async (base) => {
        const probe = (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = src;
          });

        for (const ext of extensions) {
          const src = `${base}.${ext}`;
          const ok = await probe(src);
          if (ok) return src;
        }

        return null;
      };

      const carousel = document.querySelector('[data-screenshots]');
      if (carousel) {
        const img = carousel.querySelector('[data-screenshot-img]');
        const fallback = carousel.querySelector('[data-screenshot-fallback]');
        const dots = carousel.querySelector('[data-screenshot-dots]');
        const prev = carousel.querySelector('.home-carousel__btn--prev');
        const next = carousel.querySelector('.home-carousel__btn--next');

        let current = 0;
        let timer = null;

        const renderDots = () => {
          if (!dots) return;
          dots.innerHTML = screenshots
            .map((_, i) => `<button type="button" class="home-carousel__dot${i === current ? ' is-active' : ''}" data-dot-index="${i}" aria-label="Ir para ${i + 1}"></button>`)
            .join('');

          dots.querySelectorAll('[data-dot-index]').forEach((btn) => {
            btn.addEventListener('click', () => {
              const idx = Number(btn.getAttribute('data-dot-index'));
              if (!Number.isNaN(idx)) {
                current = idx;
                void showCurrent();
                restart();
              }
            });
          });
        };

        const showCurrent = async () => {
          if (!img) return;
          const src = await resolveImageSrc(screenshots[current].base);
          if (src) {
            img.src = src;
            img.style.display = '';
            if (fallback) fallback.style.display = 'none';
          } else {
            img.removeAttribute('src');
            img.style.display = 'none';
            if (fallback) fallback.style.display = '';
          }
          renderDots();
        };

        const go = (dir) => {
          current = (current + dir + screenshots.length) % screenshots.length;
          void showCurrent();
        };

        const restart = () => {
          if (timer) window.clearInterval(timer);
          timer = window.setInterval(() => go(1), 4500);
        };

        prev?.addEventListener('click', () => {
          go(-1);
          restart();
        });

        next?.addEventListener('click', () => {
          go(1);
          restart();
        });

        await showCurrent();
        restart();
      }
    }
  };
