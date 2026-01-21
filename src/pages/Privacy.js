export const Privacy = {
    view: () => `
      <section style="padding: 120px 20px 60px;">
        <div class="container glass-panel" style="padding: 40px; text-align: left; max-width: 800px;">
          <h1 style="margin-bottom: 30px; border-bottom: 1px solid var(--glass-border); padding-bottom: 20px;">Política de Privacidade - Lumen Reader</h1>
          
          <div style="color: var(--text-muted); line-height: 1.8;">
            <p style="margin-bottom: 20px;">Última atualização: 21 de janeiro de 2026</p>
            
            <p style="margin-bottom: 20px;">O Lumen Reader foi desenvolvido com a privacidade como seu pilar fundamental. Esta política descreve como tratamos suas informações e, especificamente, como interagimos com os dados de usuário do Google.</p>

            <h3 style="color: #fff; margin-top: 30px; margin-bottom: 15px;">1. Compromisso com a Privacidade</h3>
            <p style="margin-bottom: 20px;"><strong>Não coletamos, armazenamos ou compartilhamos seus dados pessoais em servidores externos.</strong> Todo o processamento de leitura e personalização ocorre <strong>localmente no seu dispositivo</strong>.</p>
            
            <h3 style="color: #fff; margin-top: 30px; margin-bottom: 15px;">2. Integração com Google Drive (Dados de Usuário)</h3>
            <p style="margin-bottom: 10px;">O Lumen Reader oferece integração opcional com o Google Drive para permitir que você acesse e leia seus livros armazenados na nuvem.</p>
            <ul style="margin-bottom: 20px; padding-left: 20px;">
              <li style="margin-bottom: 10px;"><strong>Acesso e Escopo:</strong> O aplicativo solicita acesso aos seus arquivos através da API do Google Drive (escopo de leitura) <strong>apenas para permitir que você os selecione e leia</strong>. Isso permite que o app liste o nome, tamanho e tipo dos arquivos para que você possa selecioná-los.</li>
              <li style="margin-bottom: 10px;"><strong>Uso de Dados:</strong> O conteúdo dos arquivos é <strong>baixado temporariamente para o navegador apenas para fins de exibição e leitura</strong>. <strong>Não realizamos varreduras em segundo plano</strong> nem acessamos arquivos que não foram selecionados por você.</li>
              <li style="margin-bottom: 10px;"><strong>Armazenamento e Proteção:</strong> <strong>Não armazenamos o conteúdo dos seus arquivos ou suas credenciais em nossos servidores.</strong> O acesso é feito via <strong>tokens de autenticação seguros gerenciados localmente</strong> pelo seu próprio dispositivo/navegador.</li>
              <li style="margin-bottom: 10px;"><strong>Cláusula de Uso Limitado:</strong> O uso e a transferência de informações recebidas das APIs do Google pelo Lumen Reader para qualquer outro aplicativo estarão em conformidade com a <a href="https://developers.google.com/terms/api-services-user-data-policy#limited-use" target="_blank" style="color: var(--accent-light);">Política de Dados do Usuário dos Serviços de API do Google</a>, incluindo os requisitos de Uso Limitado.</li>
            </ul>

            <h3 style="color: #fff; margin-top: 30px; margin-bottom: 15px;">3. Retenção e Exclusão de Dados</h3>
            <p style="margin-bottom: 10px;">Como <strong>não armazenamos seus dados em servidores próprios</strong>, a retenção ocorre apenas localmente:</p>
            <ul style="margin-bottom: 20px; padding-left: 20px;">
               <li style="margin-bottom: 10px;"><strong>Tokens de Acesso:</strong> Permanecem no <strong>armazenamento local do seu navegador</strong> e podem ser removidos a qualquer momento ao "Sair" da conta no app ou limpando os dados do navegador.</li>
               <li style="margin-bottom: 10px;"><strong>Revogação de Acesso:</strong> Você pode revogar o acesso do Lumen Reader permanentemente através das Configurações de Segurança da sua Conta Google.</li>
            </ul>

            <h3 style="color: #fff; margin-top: 30px; margin-bottom: 15px;">4. Permissões de Arquivo Local</h3>
            <p style="margin-bottom: 20px;">O aplicativo solicita permissão de acesso ao sistema de arquivos local <strong>apenas para abrir os livros e documentos que você seleciona explicitamente</strong>. Nenhuma varredura de arquivos é realizada sem o seu consentimento.</p>
            
            <h3 style="color: #fff; margin-top: 30px; margin-bottom: 15px;">5. Compartilhamento de Dados</h3>
            <p style="margin-bottom: 20px;"><strong>Nós não vendemos, trocamos ou transferimos suas informações para terceiros.</strong> Seus dados e arquivos são processados exclusivamente para a funcionalidade principal de leitura de documentos dentro do aplicativo.</p>
            
            <h3 style="color: #fff; margin-top: 30px; margin-bottom: 15px;">6. Contato e Responsabilidade</h3>
            <p style="margin-bottom: 10px;">Este aplicativo é mantido por ItaloDev. Se você tiver dúvidas sobre esta política ou sobre o tratamento de seus dados, entre em contato:</p>
            <p>E-mail: <a href="mailto:italovieiradev3@gmail.com" style="color: var(--accent-light);">italovieiradev3@gmail.com</a></p>
          </div>
        </div>
      </section>
    `
  };

