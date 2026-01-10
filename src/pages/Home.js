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
            <a id="download-btn" href="https://github.com/italofvm/lumen-reader/releases" target="_blank" class="btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16L12 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 13L12 16L15 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5L19 9.5V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Baixar Versão Recente</span>
            </a>
            <div style="margin-top: 15px; font-size: 0.85rem; color: rgba(255,255,255,0.4);">
              Disponível para Windows, macOS e Linux
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
      const btn = document.getElementById('download-btn');
      const btnText = btn.querySelector('span');
      
      try {
        btnText.innerText = "Buscando versão...";
        const response = await fetch('https://api.github.com/repos/italofvm/lumen-reader/releases/latest');
        if (!response.ok) throw new Error('Falha na requisição');
        
        const data = await response.json();
        
        // Find best asset (exe, dmg, or first available)
        // const asset = data.assets.find(a => a.name.endsWith('.exe') || a.name.endsWith('.dmg') || a.name.endsWith('.AppImage')) || data.assets[0];
        // Requirement: "primeiro asset encontrado (ou o link da release)"
        
        const downloadUrl = (data.assets && data.assets.length > 0) 
            ? data.assets[0].browser_download_url 
            : data.html_url;
            
        btn.href = downloadUrl;
        btnText.innerText = `Baixar ${data.tag_name}`;
        
      } catch (error) {
        console.error("Erro ao buscar release:", error);
        btnText.innerText = "Baixar no GitHub";
        // href remains the generic releases page
      }
    }
  };
