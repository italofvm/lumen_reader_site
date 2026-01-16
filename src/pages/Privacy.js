export const Privacy = {
    view: () => `
      <section style="padding: 120px 20px 60px;">
        <div class="container glass-panel" style="padding: 40px; text-align: left; max-width: 800px;">
          <h1 style="margin-bottom: 30px; border-bottom: 1px solid var(--glass-border); padding-bottom: 20px;">Política de Privacidade</h1>
          
          <div style="color: var(--text-muted); line-height: 1.8;">
            <p style="margin-bottom: 20px;">Última atualização: ${new Date().toLocaleDateString('pt-BR')}</p>
            
            <h3 style="color: #fff; margin-top: 30px; margin-bottom: 15px;">1. Compromisso com a Privacidade</h3>
            <p style="margin-bottom: 20px;">O Lumen Reader foi construído com a privacidade como pilar fundamental. Não coletamos, armazenamos ou compartilhamos seus dados pessoais em servidores externos. A maior parte do processamento ocorre localmente no seu dispositivo.</p>
            
            <h3 style="color: #fff; margin-top: 30px; margin-bottom: 15px;">2. Integração com Google Drive</h3>
            <p style="margin-bottom: 10px;">O Lumen Reader oferece integração opcional com o Google Drive para permitir que você acesse seus livros armazenados na nuvem.</p>
            <ul style="margin-bottom: 20px; padding-left: 20px;">
              <li><strong>Acesso:</strong> O aplicativo solicita acesso aos seus arquivos do Google Drive apenas para permitir que você os selecione e leia dentro do app.</li>
              <li><strong>Armazenamento:</strong> Não armazenamos o conteúdo dos seus arquivos ou suas credenciais em nossos servidores. O acesso é feito via tokens de autenticação seguros gerenciados pelo seu próprio dispositivo.</li>
              <li><strong>Uso Limitado:</strong> O uso e a transferência de informações recebidas das APIs do Google pelo Lumen Reader para qualquer outro aplicativo estarão em conformidade com a <a href="https://developers.google.com/terms/api-services-user-data-policy#limited-use" target="_blank" style="color: var(--accent-light);">Política de Dados do Usuário dos Serviços de API do Google</a>, incluindo os requisitos de Uso Limitado.</li>
            </ul>

            <h3 style="color: #fff; margin-top: 30px; margin-bottom: 15px;">3. Permissões de Arquivo Local</h3>
            <p style="margin-bottom: 20px;">O aplicativo solicita permissão de acesso ao sistema de arquivos local apenas para abrir os livros e documentos que você seleciona explicitamente. Nenhuma varredura de fundo é realizada sem o seu consentimento.</p>
            
            <h3 style="color: #fff; margin-top: 30px; margin-bottom: 15px;">4. Compartilhamento de Dados</h3>
            <p style="margin-bottom: 20px;">Não vendemos, trocamos ou transferimos suas informações para terceiros. Seus dados do Google Drive são usados apenas para a funcionalidade principal de leitura de documentos no aplicativo.</p>
            
            <h3 style="color: #fff; margin-top: 30px; margin-bottom: 15px;">5. Contato</h3>
            <p>Se você tiver dúvidas sobre esta política, entre em contato através do nosso repositório no GitHub ou suporte oficial.</p>
          </div>
        </div>
      </section>
    `
  };

