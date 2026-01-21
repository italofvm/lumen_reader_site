export const Navbar = () => {
    return `
      <nav class="glass-panel nav" aria-label="Navegação principal">
        <a href="/" data-link class="nav__brand">
          <!-- Simple Logo Placeholder -->
          <img src="/logo.webp" alt="Lumen Reader Logo" class="nav__logo" width="40" height="40" />
          Lumen Reader
        </a>


        <button type="button" class="nav__toggle" data-nav-toggle aria-label="Abrir menu" aria-expanded="false">
          <span class="nav__toggle-bar"></span>
          <span class="nav__toggle-bar"></span>
          <span class="nav__toggle-bar"></span>
        </button>

        <div class="nav__links" data-nav-links>
          <a href="/" data-link class="nav__link">Home</a>
          <a href="/privacy" data-link class="nav__link">Privacidade</a>
          <a href="/terms" data-link class="nav__link">Termos</a>
          <a href="/donate" data-link class="nav__link nav__link--donate" style="color: var(--accent-blue); font-weight: 600;">Apoiar</a>
        </div>


      </nav>
    `;
  };
