export default class Router {
  constructor(routes) {
    this.routes = routes;
    this.app = document.getElementById('app');
    
    window.addEventListener('popstate', () => {
      this.loadRoute(window.location.pathname);
    });

    document.addEventListener('click', (e) => {
      const link = e.target.closest('[data-link]');
      if (link) {
        e.preventDefault();
        this.navigateTo(link.getAttribute('href'));
      }
    });
  }

  navigateTo(url) {
    window.history.pushState(null, null, url);
    this.loadRoute(url);
    window.scrollTo(0, 0);
  }

  async loadRoute(url) {
    const match = this.routes.find(r => r.path === url) || this.routes.find(r => r.path === '/');
    
    // Clear current content (except nav/footer if we want specific layout, but simpler to re-render or keep structure)
    // For simplicity, we'll assume the rendered component returns a full HTML string or Element
    
    // Actually, let's keep Nav and Footer persistent if we want, but let's just re-render APP content area
    // Setup generic app structure if not present
    if (!document.querySelector('nav')) {
       // Initial Load
    }
    
    const content = await match.view();
    
    // We expect 'view' to return a string of HTML or update specific container
    // Let's make view functions return HTML string.
    
    const appContent = document.getElementById('page-content');
    if (appContent) {
        appContent.innerHTML = content;
        // Re-attach scripts or event listeners if needed (like the download button)
        if (match.afterRender) match.afterRender();
    }
  }
}
