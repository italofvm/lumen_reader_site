import './style.css';
import Router from './src/router.js';
import { Navbar } from './src/components/Navbar.js';
import { Footer } from './src/components/Footer.js';
import { Home } from './src/pages/Home.js';
import { Privacy } from './src/pages/Privacy.js';
import { Terms } from './src/pages/Terms.js';
import { Donate } from './src/pages/Donate.js';

// Define Routes
const routes = [
  { path: '/', view: Home.view, afterRender: Home.afterRender },
  { path: '/privacy', view: Privacy.view },
  { path: '/terms', view: Terms.view },
  { path: '/donate', view: Donate.view, afterRender: Donate.afterRender }
];



// Initialize Helper Components
// We inject Nav and Footer separately to avoid re-rendering them constantly if we wanted, 
// but for this simple implementation we can just structure the APP once.

document.querySelector('#app').innerHTML = `
  ${Navbar()}
  <div id="page-content" style="flex: 1; display: flex; flex-direction: column;"></div>
  ${Footer()}
`;

const navToggle = document.querySelector('[data-nav-toggle]');
const navLinks = document.querySelector('[data-nav-links]');

if (navToggle && navLinks) {
  const closeMenu = () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  };

  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.classList.toggle('nav-open', isOpen);
  });

  navLinks.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link) closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMenu();
  });
}

// Start Router
const router = new Router(routes);

// Initial Load
router.loadRoute(window.location.pathname);
