export const Donate = {
    view: () => `
      <section style="padding: 120px 20px 60px; min-height: 100vh; display: flex; flex-direction: column; align-items: center;">
        <div class="container" style="max-width: 1000px; text-align: center;">
          <h1 style="font-size: clamp(2.5rem, 8vw, 3.5rem); margin-bottom: 20px; font-weight: 700; background: linear-gradient(135deg, #fff 0%, var(--accent-blue) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
            Apoie o Projeto
          </h1>
          <p style="color: var(--text-muted); font-size: 1.2rem; max-width: 600px; margin: 0 auto 50px; line-height: 1.6;">
            O Lumen Reader é um software de código aberto mantido com dedicação. Sua contribuição ajuda a manter a infraestrutura e o desenvolvimento ativo.
          </p>


          <div style="display: flex; justify-content: center; margin-bottom: 60px;">
            
            <!-- PIX Card -->
            <div class="glass-panel" style="padding: 40px; border-radius: 24px; transition: transform 0.3s ease; display: flex; flex-direction: column; align-items: center; max-width: 450px; width: 100%;">
              <div style="width: 60px; height: 60px; background: rgba(50, 186, 180, 0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; border: 1px solid rgba(50, 186, 180, 0.2);">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 12L12 22L22 12L12 2Z" stroke="#32BAB4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 7L7 12L12 17L17 12L12 7Z" fill="#32BAB4" fill-opacity="0.2" stroke="#32BAB4" stroke-width="2"/>
                </svg>
              </div>
              <h3 style="color: #fff; margin-bottom: 15px; font-size: 1.5rem;">PIX</h3>
              <p style="color: var(--text-muted); margin-bottom: 25px; font-size: 0.95rem;">Contribuir via PIX é instantâneo e sem taxas de processamento externas.</p>
              
              <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 12px; width: 100%; word-break: break-all; font-family: monospace; color: var(--accent-blue); border: 1px solid var(--glass-border); margin-bottom: 20px;">
                d999f42a-e90b-4e68-8459-a8274edf47aa
              </div>
              
              <button onclick="copyPix()" class="btn btn--primary" style="width: 100%; padding: 12px;">
                Copiar Chave
              </button>

            </div>

          </div>


          <div class="glass-panel" style="padding: 30px; border-radius: 20px;">
            <p style="color: var(--text-muted); font-size: 0.9rem; margin: 0;">
                <strong style="color: #fff;">Transparência:</strong> Todas as doações são reinvestidas em taxas de domínio, servidores de build e ferramentas de desenvolvimento para tornar o Lumen Reader cada vez melhor.
            </p>
          </div>
        </div>

        <!-- Custom Toast Modal -->
        <div id="pix-toast" style="position: fixed; bottom: 40px; left: 50%; transform: translateX(-50%); background: rgba(0, 198, 255, 0.4); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border: 1px solid rgba(0, 198, 255, 0.6); padding: 16px 32px; border-radius: 50px; color: #fff; font-weight: 700; display: flex; align-items: center; gap: 12px; transition: all 0.4s ease; opacity: 0; pointer-events: none; z-index: 1000000; box-shadow: 0 10px 50px rgba(0, 198, 255, 0.3);">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span style="letter-spacing: 0.5px;">Chave PIX copiada!</span>
        </div>


      </section>
    `,
    afterRender: () => {
        window.copyPix = () => {
            const btn = document.querySelector('.btn--primary');
            const key = 'd999f42a-e90b-4e68-8459-a8274edf47aa';
            
            // Visual feedback on button
            if (btn) {
                btn.style.transform = 'scale(0.95)';
                setTimeout(() => btn.style.transform = 'scale(1)', 100);
            }

            navigator.clipboard.writeText(key).then(() => {
                const toast = document.getElementById('pix-toast');
                if (toast) {
                    toast.style.opacity = '1';
                    
                    setTimeout(() => {
                        toast.style.opacity = '0';
                    }, 3000);
                }

            }).catch(err => {
                console.error('Erro ao copiar:', err);
                alert('Chave PIX: d999f42a-e90b-4e68-8459-a8274edf47aa'); // Fallback caso clipboard falhe
            });
        };
    }
  };


