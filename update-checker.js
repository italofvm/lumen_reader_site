/**
 * Sistema de verificação de versão para o site
 * Consumir o mesmo version.json usado pelo app
 */

class UpdateChecker {
  constructor(versionJsonUrl = '/version.json') {
    this.versionJsonUrl = versionJsonUrl;
    this.versionData = null;
  }

  /**
   * Carrega os dados do version.json
   */
  async loadVersionData() {
    try {
      const response = await fetch(this.versionJsonUrl);
      if (!response.ok) {
        throw new Error('Erro ao carregar version.json');
      }
      this.versionData = await response.json();
      return this.versionData;
    } catch (error) {
      console.error('Erro ao buscar versão:', error);
      return null;
    }
  }

  /**
   * Atualiza elementos do DOM com informações da versão
   */
  async updatePageElements() {
    const data = await this.loadVersionData();
    if (!data) return;

    // Atualizar versão atual
    const versionElement = document.getElementById('app-version');
    if (versionElement) {
      versionElement.textContent = data.versionName;
    }

    // Atualizar data de lançamento
    const dateElement = document.getElementById('release-date');
    if (dateElement) {
      const formattedDate = new Date(data.releaseDate).toLocaleDateString('pt-BR');
      dateElement.textContent = formattedDate;
    }

    // Atualizar changelog
    const changelogElement = document.getElementById('changelog');
    if (changelogElement) {
      changelogElement.innerHTML = data.changelog
        .map(item => `<li>${item}</li>`)
        .join('');
    }

    // Atualizar botão de download
    const downloadButton = document.getElementById('download-button');
    if (downloadButton) {
      downloadButton.href = data.downloadUrl;
    }
  }

  /**
   * Retorna os dados da versão atual
   */
  getVersionData() {
    return this.versionData;
  }
}

// Export to window for SPA usage
window.UpdateChecker = UpdateChecker;

// Inicialização automática quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', async () => {
  const checker = new UpdateChecker();
  await checker.updatePageElements();
});

// Exportar para uso em outros scripts se necessário
if (typeof module !== 'undefined' && module.exports) {
  module.exports = UpdateChecker;
}
