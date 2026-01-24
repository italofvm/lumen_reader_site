export const Donate = {
    view: () => `
      <section style="padding: 120px 0 80px; min-height: 80vh; display: flex; flex-direction: column; justify-content: center;">
        <div class="container" style="max-width: 800px; text-align: center;">
          
          <h1 class="text-massive" style="font-size: clamp(3rem, 8vw, 6rem); margin-bottom: 20px;">APOIE</h1>
          
          <p style="font-size: 1.2rem; color: var(--text-muted); margin-bottom: 60px; max-width: 600px; margin-left: auto; margin-right: auto;">
            Software livre vive de paixão. Sua contribuição mantém o código compilando.
          </p>

          <!-- PIX TICKET -->
          <div class="sharp-box" style="
            max-width: 480px; 
            margin: 0 auto; 
            padding: 40px; 
            background: var(--bg-surface); 
            border: 1px solid var(--border-color);
            position: relative;
          ">
            <!-- Decorative cutouts -->
            <div style="position: absolute; top: 50%; left: -10px; width: 20px; height: 20px; background: var(--bg-dark); border-radius: 50%;"></div>
            <div style="position: absolute; top: 50%; right: -10px; width: 20px; height: 20px; background: var(--bg-dark); border-radius: 50%;"></div>
            
            <h3 style="color: var(--accent); margin-bottom: 24px; font-size: 1.5rem;">PIX INSTANTÂNEO</h3>
            
            <div style="background: var(--bg-dark); padding: 16px; border: 1px dashed var(--border-color); margin-bottom: 24px; font-family: monospace; word-break: break-all; color: var(--text-main);">
              d999f42a-e90b-4e68-8459-a8274edf47aa
            </div>
            
            <button onclick="copyPix()" class="btn-primary" style="width: 100%;">
              COPIAR CHAVE
            </button>
          </div>

          <p style="margin-top: 40px; font-family: monospace; font-size: 0.8rem; color: var(--text-muted);">
            SERVER_STATUS: 100% // FUNDING: COMMUNITY
          </p>

        </div>

        <!-- Brutalist Toast -->
        <div id="pix-toast" style="
            position: fixed; 
            bottom: 30px; 
            left: 50%; 
            transform: translateX(-50%); 
            background: var(--accent); 
            color: #000; 
            padding: 16px 32px; 
            font-weight: 700; 
            text-transform: uppercase;
            opacity: 0; 
            pointer-events: none; 
            transition: opacity 0.3s;
            z-index: 9999;
            box-shadow: 8px 8px 0px rgba(0,0,0,0.5);
        ">
            CHAVE COPIADA
        </div>

      </section>
    `,
    afterRender: () => {
        window.copyPix = () => {
             const key = 'd999f42a-e90b-4e68-8459-a8274edf47aa';
             navigator.clipboard.writeText(key).then(() => {
                const toast = document.getElementById('pix-toast');
                if (toast) {
                    toast.style.opacity = '1';
                    setTimeout(() => toast.style.opacity = '0', 2500);
                }
             }).catch(err => alert('Chave PIX: ' + key));
        };
    }
  };
