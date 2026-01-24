import Router from './src/router.js';
import { Navbar } from './src/components/Navbar.js';
import { Footer } from './src/components/Footer.js';
import { Home } from './src/pages/Home.js';
import { Privacy } from './src/pages/Privacy.js';
import { Terms } from './src/pages/Terms.js';
import { Donate } from './src/pages/Donate.js';

// Debug: Confirm module load
console.log("Main.js: Modules loaded successfully");

const routes = [
  { 
    path: '/', 
    view: Home.view, 
    afterRender: Home.afterRender,
    meta: {
      title: 'Lumen Reader - Leitura Iluminada',
      description: 'Lumen Reader: O leitor de ebooks e documentos definitivo focado em performance, privacidade e design premium para Android e iOS.',
      canonical: 'https://lumenreader.vercel.app/'
    }
  },
  { 
    path: '/privacy', 
    view: Privacy.view,
    meta: {
      title: 'Política de Privacidade - Lumen Reader',
      description: 'Política de Privacidade do Lumen Reader.',
      canonical: 'https://lumenreader.vercel.app/privacy'
    }
  },
  { 
    path: '/terms', 
    view: Terms.view,
    meta: {
      title: 'Termos de Serviço - Lumen Reader',
      description: 'Termos de Serviço do Lumen Reader.',
      canonical: 'https://lumenreader.vercel.app/terms'
    }
  },
  { 
    path: '/donate', 
    view: Donate.view, 
    afterRender: Donate.afterRender,
    meta: {
      title: 'Apoie o Lumen Reader',
      description: 'Ajude a manter o Lumen Reader livre.',
      canonical: 'https://lumenreader.vercel.app/donate'
    }
  }
];

const initApp = () => {
    try {
        console.log("Main.js: Initializing App...");
        const app = document.querySelector('#app');
        if (!app) throw new Error("Elemento #app não encontrado no DOM");

        // Render Shell
        app.innerHTML = `
            ${Navbar()}
            <div id="page-content" style="flex: 1; display: flex; flex-direction: column;"></div>
            ${Footer()}
        `;
        console.log("Main.js: App Shell Rendered");

        // Setup menu toggle
        setupMenuToggle();
        
        // Start Router
        const router = new Router(routes);
        router.loadRoute(window.location.pathname);
        console.log("Main.js: Router Started");

    } catch (e) {
        console.error("CRITICAL ERROR IN INIT_APP:", e);
        alert("Erro crítico ao carregar interface: " + e.message);
    }
};

const setupMenuToggle = () => {
  document.addEventListener('click', (e) => {
    const navToggle = e.target.closest('[data-nav-toggle]');
    if (navToggle) {
      const navLinks = document.querySelector('[data-nav-links]');
      if (navLinks) {
        // Toggle 'is-active' instead of 'is-open' for cleaner syntax if we changed CSS?
        // Let's stick to what Navbar/CSS expects. The new CSS likely handles mobile menu differenly?
        // Checking style.css: body.nav-open .nav__links { display: flex; ... }
        // Navbar.js has data-nav-toggle
        
        document.body.classList.toggle('nav-open');
        const isOpen = document.body.classList.contains('nav-open');
        navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      }
    }
    
    // Close on link click
    if (e.target.closest('a') && document.body.classList.contains('nav-open')) {
       document.body.classList.remove('nav-open');
       const toggle = document.querySelector('[data-nav-toggle]');
       if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }
  });
};

// Safer Initialization
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
