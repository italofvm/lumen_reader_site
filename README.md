# Lumen Reader - Landing Page

<div align="center">
  <img src="public/logo.jpg" alt="Lumen Reader Logo" width="120" style="border-radius: 20px; box-shadow: 0 8px 20px rgba(0,0,0,0.3);">
  <br />
  <br />

  <h1>Sua leitura, iluminada.</h1>
  
  <p>
    Landing Page oficial do <b>Lumen Reader</b>, um leitor de documentos focado em performance, privacidade e design.
  </p>

  <p>
    <a href="#-tecnologias">Tecnologias</a> •
    <a href="#-funcionalidades">Funcionalidades</a> •
    <a href="#-como-executar">Como Executar</a> •
    <a href="#-estrutura">Estrutura</a>
  </p>
</div>

---

## 🚀 Sobre o Projeto

Este projeto é a página de apresentação e download do aplicativo **Lumen Reader**.  
Desenhada com estética **Glassmorphism** e **Neon**, a página oferece uma experiência visual imersiva e moderna, refletindo a identidade visual do aplicativo.

Foi construída como uma **SPA (Single Page Application)** leve, garantindo navegação instantânea e alta performance sem a necessidade de frameworks pesados.

## 🛠 Tecnologias

- **Core**: HTML5, CSS3, Vanilla JavaScript (ESModules)
- **Build Tool**: [Vite](https://vitejs.dev/) (para desenvolvimento rápido e build otimizado)
- **Estilização**: CSS Nativo (CSS Variables, Flexbox, Grid, Glassmorphism)
- **API**: Integração com GitHub REST API para links de download dinâmicos
- **Fontes**: [Outfit](https://fonts.google.com/specimen/Outfit) (Google Fonts)

## ✨ Funcionalidades

- **Design Premium**: Interface com efeitos de vidro fosco (`backdrop-filter`), gradientes e animações suaves.
- **Download Inteligente**: Um botão que consulta a API do GitHub em tempo real para buscar sempre a **última versão (Release)** disponível do software, evitando links quebrados ou desatualizados.
- **SPA Router**: Sistema de roteamento próprio (Client-Side) para navegação fluida entre Home, Privacidade e Termos de Uso, sem recarregamento da página.
- **Responsividade**: Layout totalmente adaptável para desktops, tablets e mobile.

## 📦 Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- npm ou yarn

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/italofvm/lumen-reader-home.git
   cd lumen_reader_home
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```
   Acesse no navegador: `http://localhost:5173`

4. **Build para Produção**
   Para gerar os arquivos otimizados na pasta `dist/`:
   ```bash
   npm run build
   ```

## 📂 Estrutura do Projeto

```text
/
├── public/             # Arquivos estáticos (Logo, Favicon)
├── src/
│   ├── components/     # Componentes de UI (Navbar, Footer)
│   ├── pages/          # Conteúdo das páginas (Home, Privacy, Terms)
│   └── router.js       # Lógica de roteamento SPA
├── main.js             # Ponto de entrada JavaScript
├── style.css           # Estilos globais e Design System
├── index.html          # HTML Principal
└── vite.config.js      # Configuração do Vite
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  Feito com 💜 por <a href="https://github.com/italofvm">Ítalo</a>
</div>
