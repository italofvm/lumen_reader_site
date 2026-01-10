export const Privacy = {
    view: () => `
      <section style="padding: 120px 20px 60px;">
        <div class="container glass-panel" style="padding: 40px; text-align: left; max-width: 800px;">
          <h1 style="margin-bottom: 30px; border-bottom: 1px solid var(--glass-border); padding-bottom: 20px;">Política de Privacidade</h1>
          
          <div style="color: var(--text-muted); line-height: 1.8;">
            <p style="margin-bottom: 20px;">Última atualização: ${new Date().toLocaleDateString('pt-BR')}</p>
            
            <h3 style="color: #fff; margin-top: 30px; margin-bottom: 15px;">1. Coleta de Dados</h3>
            <p style="margin-bottom: 20px;">O Lumen Reader foi construído com a privacidade como pilar fundamental. Não coletamos, armazenamos ou compartilhamos seus dados pessoais. Todos os documentos abertos no aplicativo permanecem estritamente no seu dispositivo local.</p>
            
            <h3 style="color: #fff; margin-top: 30px; margin-bottom: 15px;">2. Permissões de Arquivo</h3>
            <p style="margin-bottom: 20px;">O aplicativo solicita permissão de acesso ao sistema de arquivos apenas para abrir os livros e documentos que você seleciona explicitamente. Nenhuma varredura de fundo é realizada sem o seu consentimento.</p>
            
            <h3 style="color: #fff; margin-top: 30px; margin-bottom: 15px;">3. Comunicação Externa</h3>
            <p style="margin-bottom: 20px;">O aplicativo pode realizar conexões de rede apenas para verificar atualizações ou baixar metadados de livros (como capas) caso você ative essa funcionalidade. Nenhuma informação pessoal é transmitida.</p>
            
            <h3 style="color: #fff; margin-top: 30px; margin-bottom: 15px;">4. Contato</h3>
            <p>Se você tiver dúvidas sobre esta política, entre em contato através do nosso repositório no GitHub.</p>
          </div>
        </div>
      </section>
    `
  };
