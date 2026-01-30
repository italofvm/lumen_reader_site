export const Footer = () => {
    return `
      <footer style="margin-top: auto; padding: 60px 0; background: var(--bg-surface); border-top: 1px solid var(--border-color);">
        <div class="container">
          <div style="display: flex; flex-direction: column; align-items: center; gap: 24px;">
            
            <p style="text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.1em; color: var(--text-muted);">
              &copy; ${new Date().getFullYear()} Lumen Reader. Code is Law.
            </p>

            <div style="display: flex; gap: 32px;">
               <a href="/privacy" data-link class="nav__link" style="font-size: 0.8rem;">Privacidade</a>
               <a href="/terms" data-link class="nav__link" style="font-size: 0.8rem;">Termos</a>
               <a href="/donate" data-link class="nav__link" style="font-size: 0.8rem; color: var(--accent) !important;">Apoiar</a>
            </div>

            <div style="width: 40px; height: 1px; background: var(--border-color); margin-top: 20px;"></div>
             
             <p style="font-size: 0.95rem; color: var(--text-muted); max-width: 400px; text-align: center;">
               Desenvolvido por <a href="https://italovdev.vercel.app/" target="_blank" rel="noopener noreferrer" style="color: var(--accent) !important;">ItaloDev</a>.
             </p>

          </div>
        </div>
      </footer>
    `;
  };
