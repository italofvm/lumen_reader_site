export const Footer = () => {
    return `
      <footer style="margin-top: auto; padding: 40px 0; text-align: center; border-top: 1px solid var(--glass-border); background: var(--glass-bg); backdrop-filter: blur(10px);">
        <div class="container">
          <p style="color: var(--text-muted); font-size: 0.9rem;">
            &copy; ${new Date().getFullYear()} Lumen Reader. Todos os direitos reservados.
          </p>
          <div style="margin-top: 15px; display: flex; justify-content: center; gap: 20px;">
             <a href="https://github.com/italofvm/lumen-reader" target="_blank" style="color: var(--text-muted); font-size: 0.9rem;">GitHub</a>
             <a href="/privacy" data-link style="color: var(--text-muted); font-size: 0.9rem;">Política de Privacidade</a>
             <a href="/terms" data-link style="color: var(--text-muted); font-size: 0.9rem;">Termos de Uso</a>
             <a href="/donate" data-link style="color: var(--accent-blue); font-size: 0.9rem; font-weight: 600;">Apoiar Projeto</a>
          </div>

        </div>
      </footer>

    `;
  };
