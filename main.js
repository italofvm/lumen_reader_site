import './style.css';
import Router from './src/router.js';
import { Navbar } from './src/components/Navbar.js';
import { Footer } from './src/components/Footer.js';
import { Home } from './src/pages/Home.js';
import { Privacy } from './src/pages/Privacy.js';
import { Terms } from './src/pages/Terms.js';

// Define Routes
const routes = [
  { path: '/', view: Home.view, afterRender: Home.afterRender },
  { path: '/privacy', view: Privacy.view },
  { path: '/terms', view: Terms.view }
];

// Initialize Helper Components
// We inject Nav and Footer separately to avoid re-rendering them constantly if we wanted, 
// but for this simple implementation we can just structure the APP once.

document.querySelector('#app').innerHTML = `
  ${Navbar()}
  <div id="page-content" style="flex: 1; display: flex; flex-direction: column;"></div>
  ${Footer()}
`;

// Start Router
const router = new Router(routes);

// Initial Load
router.loadRoute(window.location.pathname);
