export const Navbar = () => {
    return `
      <nav class="nav" aria-label="Navegação principal">
        <a href="/" data-link class="nav__brand">
          <img src="/logo.webp" alt="Lumen Logo" class="nav__logo" width="32" height="32" />
          LUMEN
        </a>

        <div class="nav__links" data-nav-links>
          <a href="/" data-link class="nav__link">Home</a>
          <a href="/privacy" data-link class="nav__link">Privacidade</a>
          <a href="/terms" data-link class="nav__link">Termos</a>
          <a href="/donate" data-link class="nav__link nav__link--donate">Apoiar</a>
        </div>

        <button type="button" class="nav__toggle" data-nav-toggle aria-label="Abrir menu" aria-expanded="false">
          <span class="nav__toggle-bar"></span>
          <span class="nav__toggle-bar"></span>
          <span class="nav__toggle-bar"></span>
        </button>
      </nav>
    `;
  };
