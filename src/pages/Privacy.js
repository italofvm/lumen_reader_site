export const Privacy = {
    view: () => `
      <section style="padding: 120px 0 80px;">
        <div class="container" style="max-width: 800px;">
          <header style="margin-bottom: 60px; border-bottom: 2px solid var(--accent); padding-bottom: 20px;">
             <h1 style="font-size: clamp(2rem, 5vw, 3.5rem); text-transform: uppercase;">Política de Privacidade</h1>
             <p style="color: var(--text-muted); font-family: monospace; margin-top: 10px;">LAST_UPDATE: 2026-01-21 // STATUS: ACTIVE</p>
          </header>
          
          <div style="line-height: 1.8; font-size: 1.05rem;">
            
            <div class="sharp-box" style="padding: 30px; margin-bottom: 40px; border-left: 4px solid var(--accent);">
               <h3 style="margin-bottom: 15px; color: var(--accent);">// RESUMO EXECUTIVO</h3>
               <p><strong>Zero Tracking. Zero Ads. Zero Venda de Dados.</strong><br>
               O Lumen Reader opera sob o princípio de "Local-First". Seus dados nunca deixam seu dispositivo a menos que você explicitamente ordene.
               </p>
            </div>

            <h3 style="margin-top: 40px; margin-bottom: 15px; text-transform: uppercase;">1. Integração Google Drive</h3>
            <p style="margin-bottom: 20px; color: var(--text-muted);">
              Acesso apenas quando solicitado. Transferência efêmera.
            </p>
            <ul style="padding-left: 20px; margin-bottom: 30px; list-style: square;">
              <li style="margin-bottom: 12px;"><strong>Escopo Mínimo:</strong> Solicitamos apenas permissão de leitura (<code>drive.readonly</code>) para listar arquivos que VOCÊ deseja abrir.</li>
              <li style="margin-bottom: 12px;"><strong>Processamento Local:</strong> O download ocorre direto para a memória do seu navegador. Não há "servidor intermediário" do Lumen processando seus livros.</li>
              <li style="margin-bottom: 12px;"><strong>Tokens:</strong> Armazenados apenas no <code>localStorage</code> do seu dispositivo.</li>
            </ul>

            <h3 style="margin-top: 40px; margin-bottom: 15px; text-transform: uppercase;">2. Armazenamento Local</h3>
            <p style="margin-bottom: 30px;">
              O app utiliza APIs do navegador (IndexedDB/FileSystem) para salvar seu progresso. Esses dados podem ser apagados limpando o cache do navegador.
            </p>
            
            <h3 style="margin-top: 40px; margin-bottom: 15px; text-transform: uppercase;">3. Contato</h3>
            <p>
              Dúvidas técnicas ou legais: <a href="mailto:italovieiradev3@gmail.com" style="color: var(--accent); text-decoration: underline;">italovieiradev3@gmail.com</a>
            </p>

          </div>
        </div>
      </section>
    `
  };
