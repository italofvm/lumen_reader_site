export const Navbar = () => {
    return `
      <nav class="glass-panel" style="position: fixed; top: 20px; left: 50%; transform: translateX(-50%); width: 90%; max-width: 1200px; padding: 0 30px; height: 70px; display: flex; align-items: center; justify-content: space-between; z-index: 1000;">
        <a href="/" data-link style="font-weight: 700; font-size: 1.5rem; letter-spacing: -1px; color: #fff; display: flex; align-items: center; gap: 10px;">
          <!-- Simple Logo Placeholder -->
          <img src="/logo.jpg" alt="Lumen Reader Logo" style="width: 40px; height: 40px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.3);" />
          Lumen Reader
        </a>
        
        <div style="display: flex; gap: 30px; align-items: center;">
          <a href="/" data-link style="font-size: 0.95rem; color: rgba(255,255,255,0.8);">Home</a>
          <a href="/privacy" data-link style="font-size: 0.95rem; color: rgba(255,255,255,0.8);">Privacidade</a>
          <a href="/terms" data-link style="font-size: 0.95rem; color: rgba(255,255,255,0.8);">Termos</a>
          <a href="https://github.com/italofvm/lumen-reader" target="_blank" style="font-size: 1.2rem; opacity: 0.8; transition: opacity 0.3s;"><i class="fab fa-github"></i> GitHub</a>
        </div>
      </nav>
    `;
  };
