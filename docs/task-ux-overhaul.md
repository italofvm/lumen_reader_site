# UX/UI Overhaul: "Swiss Punk" Radical Redesign

## 🎨 Design Commitment

**Style:** Swiss Punk / Technical Brutalism
**Why?** The current "Glassmorphism with Purple/Blue" is a distinct "Safe Harbor" (cliché). To make Lumen Reader stand out as a *high-performance* tool, we move to a sharp, technical, and high-contrast aesthetic.

**Core Decisions:**
-   **Geometry:** **Sharp (0px - 2px)**. Eliminating the "soft" 16px rounded corners.
-   **Palette:** **International Orange (`#FF3300`)** + **Deep Black (`#050505`)**. **PURPLE BAN COMPLIANT**.
-   **Layout:** **Massive Typographic Hero**. No standard 50/50 split. The text "LUMEN" will overlay the visual or standard flow.
-   **Depth:** Layered Z-axis using overlap, not blur.

## 🔨 Implementation Plan

### Phase 1: CSS Foundation (Tokens & Reset)
- [ ] Replace `style.css` variables.
- [ ] Remove all "glass-panel" classes and blurry backgrounds.
- [ ] Implement new grid system.

### Phase 2: Structural Updates (HTML)
- [ ] Refactor Hero Section: Remove `.home-hero__grid`.
- [ ] Implement "Center-Staggered" or "Massive Type" layout.
- [ ] Update Navigation to be sharp and fixed.

### Phase 3: Optimizations
- [ ] Add `will-change` to animating elements.
- [ ] Ensure `content-visibility: auto` for off-screen sections.
- [ ] Optimize loading sequence (LCP).

### Phase 4: Polish
- [ ] Micro-interactions (hover states, click feedback).
- [ ] Scroll animations (reveal on scroll).
