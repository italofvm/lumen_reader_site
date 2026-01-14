export const Home = {
    view: () => `
      <section style="min-height: 100vh; display: flex; align-items: center; justify-content: center; position: relative; padding-top: 100px;">
        <!-- Background Glows -->
        <div style="position: absolute; top: 20%; left: 20%; width: 300px; height: 300px; background: var(--primary-glow); filter: blur(100px); border-radius: 50%; opacity: 0.4;"></div>
        <div style="position: absolute; bottom: 20%; right: 20%; width: 250px; height: 250px; background: var(--secondary-glow); filter: blur(100px); border-radius: 50%; opacity: 0.4;"></div>
  
        <div class="container" style="text-align: center; position: relative; z-index: 10;">
          <h1 class="animate-fade-in" style="font-size: 4rem; margin-bottom: 20px; background: linear-gradient(135deg, #fff 0%, #b4b4ff 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Sua leitura, iluminada.</h1>
          
          <p class="animate-fade-in" style="font-size: 1.25rem; color: var(--text-muted); max-width: 600px; margin: 0 auto 40px; animation-delay: 0.2s; opacity: 0;">
            Lumen Reader é o leitor de ebooks e documentos definitivo, projetado para performance, privacidade e uma experiência visual imersiva.
          </p>
          
          <div class="animate-fade-in" style="animation-delay: 0.4s; opacity: 0;">
            <a id="download-button" href="#" class="btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16L12 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 13L12 16L15 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5L19 9.5V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Baixar APK</span>
            </a>
            
            <div style="margin-top: 25px; display: flex; flex-direction: column; gap: 10px; align-items: center; background: rgba(255,255,255,0.05); padding: 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); max-width: 400px; margin-left: auto; margin-right: auto;">
              <div style="display: flex; gap: 20px; font-size: 0.9rem; color: var(--text-muted);">
                <span>Versão: <b id="app-version" style="color: #fff;">Carregando...</b></span>
                <span>Lançamento: <b id="release-date" style="color: #fff;">Carregando...</b></span>
              </div>
              <div style="text-align: left; width: 100%;">
                <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 5px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Novidades:</p>
                <ul id="changelog" style="font-size: 0.85rem; color: rgba(255,255,255,0.7); margin: 0; padding-left: 20px;">
                  <li>Carregando...</li>
                </ul>
              </div>
            </div>
          </div>
  
          <!-- Feature Grid Small -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 80px; text-align: left;">
             <div class="glass-panel" style="padding: 25px;">
                <h3 style="color: var(--accent-blue); margin-bottom: 10px;">Leve & Rápido</h3>
                <p style="font-size: 0.95rem; color: var(--text-muted);">Construído para carregar instantaneamente, sem bloatware ou rastreadores.</p>
             </div>
             <div class="glass-panel" style="padding: 25px;">
                <h3 style="color: var(--accent-violet); margin-bottom: 10px;">Foco na Privacidade</h3>
                <p style="font-size: 0.95rem; color: var(--text-muted);">Seus documentos nunca saem do seu dispositivo. Zero telemetria invasiva.</p>
             </div>
             <div class="glass-panel" style="padding: 25px;">
                <h3 style="color: #fff; margin-bottom: 10px;">Design Fluido</h3>
                <p style="font-size: 0.95rem; color: var(--text-muted);">Interface minimalista que se adapta ao seu fluxo de leitura.</p>
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
    }
  };
