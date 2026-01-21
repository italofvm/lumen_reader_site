import Router from './src/router.js';
import { Navbar } from './src/components/Navbar.js';
import { Footer } from './src/components/Footer.js';
import { Home } from './src/pages/Home.js';
import { Privacy } from './src/pages/Privacy.js';
import { Terms } from './src/pages/Terms.js';
import { Donate } from './src/pages/Donate.js';

// Define Routes
const routes = [
  { 
    path: '/', 
    view: Home.view, 
    afterRender: Home.afterRender,
    meta: {
      title: 'Lumen Reader - Sua leitura, iluminada',
      description: 'Lumen Reader: O leitor de ebooks e documentos definitivo focado em performance, privacidade e design premium para Android e iOS.',
      canonical: 'https://lumenreader.vercel.app/'
    }
  },
  { 
    path: '/privacy', 
    view: Privacy.view,
    meta: {
      title: 'Política de Privacidade - Lumen Reader',
      description: 'Política de Privacidade do Lumen Reader. Saiba como tratamos seus dados e nossa integração segura com o Google Drive.',
      canonical: 'https://lumenreader.vercel.app/privacy'
    }
  },
  { 
    path: '/terms', 
    view: Terms.view,
    meta: {
      title: 'Termos de Serviço - Lumen Reader',
      description: 'Termos de Serviço do Lumen Reader. Condições de uso, responsabilidades e informações legais sobre o aplicativo.',
      canonical: 'https://lumenreader.vercel.app/terms'
    }
  },
  { 
    path: '/donate', 
    view: Donate.view, 
    afterRender: Donate.afterRender,
    meta: {
      title: 'Apoie o Lumen Reader',
      description: 'Ajude a manter o Lumen Reader livre de anúncios e focado em privacidade apoiando o desenvolvimento do projeto.',
      canonical: 'https://lumenreader.vercel.app/donate'
    }
  }
];

// Initialize app structure
const initApp = () => {
  document.querySelector('#app').innerHTML = `
    ${Navbar()}
    <div id="page-content" style="flex: 1; display: flex; flex-direction: column;"></div>
    ${Footer()}
  `;
  
  // Setup menu toggle
  setupMenuToggle();
  
  // Start Router
  const router = new Router(routes);
  router.loadRoute(window.location.pathname);
};

// Setup menu toggle functionality
const setupMenuToggle = () => {
  // Use event delegation on the document for the toggle button
  document.addEventListener('click', (e) => {
    const navToggle = e.target.closest('[data-nav-toggle]');
    if (navToggle) {
      const navLinks = document.querySelector('[data-nav-links]');
      if (navLinks) {
        const isOpen = navLinks.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        document.body.classList.toggle('nav-open', isOpen);
      }
    }

    // Close menu when clicking on a link inside navLinks
    const navLink = e.target.closest('[data-nav-links] a');
    if (navLink) {
      const navLinks = document.querySelector('[data-nav-links]');
      const navToggle = document.querySelector('[data-nav-toggle]');
      if (navLinks && navToggle) {
        navLinks.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
      }
    }
  });
  
  // Close menu when resizing to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      const navLinks = document.querySelector('[data-nav-links]');
      const navToggle = document.querySelector('[data-nav-toggle]');
      if (navLinks && navToggle) {
        navLinks.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-open');
      }
    }
  });
};


// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
