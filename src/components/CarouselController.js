export class CarouselController {
  constructor(rootElement, screenshots) {
    this.root = rootElement;
    this.screenshots = screenshots;
    this.current = 0;
    this.timer = null;
    
    // Elements
    this.img = this.root.querySelector('[data-screenshot-img]');
    this.fallback = this.root.querySelector('[data-screenshot-fallback]');
    this.dotsContainer = this.root.querySelector('[data-screenshot-dots]');
    this.prevBtn = this.root.querySelector('.home-carousel__btn--prev');
    this.nextBtn = this.root.querySelector('.home-carousel__btn--next');
    this.viewport = this.root.querySelector('.home-carousel__viewport');

    // Touch handling state
    this.touchStartX = 0;
    this.touchEndX = 0;
  }

  mount() {
    if (!this.root || !this.img) return;

    this.renderDots();
    this.showCurrent();
    this.attachEvents();
    this.startAutoPlay();
  }

  attachEvents() {
    // Navigation Buttons
    this.prevBtn?.addEventListener('click', () => {
      this.go(-1);
      this.restartAutoPlay();
    });

    this.nextBtn?.addEventListener('click', () => {
      this.go(1);
      this.restartAutoPlay();
    });

    // Dots Navigation
    if (this.dotsContainer) {
      this.dotsContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-dot-index]');
        if (btn) {
          const idx = Number(btn.getAttribute('data-dot-index'));
          if (!Number.isNaN(idx)) {
            this.current = idx;
            this.showCurrent();
            this.restartAutoPlay();
          }
        }
      });
    }

    // Touch / Swipe
    if (this.viewport) {
      this.viewport.addEventListener('touchstart', e => {
        this.touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      this.viewport.addEventListener('touchend', e => {
        this.touchEndX = e.changedTouches[0].screenX;
        this.handleGesture();
      }, { passive: true });
    }
  }

  handleGesture() {
    const threshold = 50;
    if (this.touchEndX < this.touchStartX - threshold) {
      this.go(1); // Swipe left -> Next
    }
    if (this.touchEndX > this.touchStartX + threshold) {
      this.go(-1); // Swipe right -> Prev
    }
    this.restartAutoPlay();
  }

  renderDots() {
    if (!this.dotsContainer) return;
    
    this.dotsContainer.innerHTML = this.screenshots
      .map((_, i) => `
        <button type="button" 
          class="home-carousel__dot${i === this.current ? ' is-active' : ''}" 
          data-dot-index="${i}" 
          aria-label="Ir para imagem ${i + 1}">
        </button>
      `)
      .join('');
  }

  showCurrent() {
    if (!this.img) return;
    
    // Update Image
    const src = this.screenshots[this.current].src;
    this.img.src = src;
    
    // Update Dots (simpler to just toggle class than re-render everything, but re-render is robust)
    this.renderDots(); 
  }

  go(direction) {
    this.current = (this.current + direction + this.screenshots.length) % this.screenshots.length;
    this.showCurrent();
  }

  startAutoPlay() {
    if (this.timer) window.clearInterval(this.timer);
    this.timer = window.setInterval(() => this.go(1), 4500);
  }

  stopAutoPlay() {
    if (this.timer) {
      window.clearInterval(this.timer);
      this.timer = null;
    }
  }

  restartAutoPlay() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  // Optional: Clean up if component is destroyed (though SPA usually just clears innerHTML)
  destroy() {
    this.stopAutoPlay();
    // Remove listeners if necessary, but elements are usually garbage collected
  }
}
