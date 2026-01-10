# Fase 1 - Arquitetura & Design

## Estrutura do Projeto
Adotamos uma abordagem **SPA (Single Page Application)** leve utilizando Vanilla JavaScript para garantir máxima performance sem o overhead de frameworks pesados para uma Landing Page.

### Estrutura de Pastas
```
/
├── index.html        # Entry Point
├── main.js           # App Entry & Router Init
├── style.css         # Design System & Global Styles
├── src/
│   ├── components/   # UI Reutilizável (Navbar, Footer)
│   ├── pages/        # Virtual Pages (Home, Privacy, Terms)
│   └── router.js     # Lógica de Roteamento Client-Side
└── docs/             # Documentação do Projeto
```

## Design System (Glassmorphism)
- **Background**: Gradientes radiais profundos (#0f0c29 -> #24243e).
- **Glass Effect**: `backdrop-filter: blur(16px)` + bordas semitransparentes.
- **Tipografia**: 'Outfit' (Google Fonts) para modernidade.
- **Cores**:
  - Primary: Violet (#7b2cbf)
  - Secondary: Cyan (#00c6ff)

## Fluxo de Dados (GitHub API)
1. `Home.js` inicia.
2. `fetch('https://api.github.com/repos/italofvm/lumen-reader/releases/latest')`.
3. Parser extrai `browser_download_url`.
4. DOM Update no botão de download.
