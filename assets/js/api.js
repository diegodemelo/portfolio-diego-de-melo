// ======================================================
// ARQUIVO: api.js
// CAMADA: Interface / Dados
// MÓDULO: Perfil
// RESPONSABILIDADE: Carregar o JSON local com dados do portfólio.
// O QUE ESTE ARQUIVO FAZ: Consulta data/profile.json via Fetch API.
// IMPORTÂNCIA NO SISTEMA: Separa conteúdo profissional da marcação HTML.
// OBSERVAÇÃO ARQUITETURAL: Requer execução via servidor HTTP local ou hospedagem estática.
// ======================================================

async function fetchProfileData() {
  const response = await fetch('./data/profile.json', { cache: 'no-store' });

  if (!response.ok) {
    throw new Error(`Falha ao carregar o perfil: HTTP ${response.status}`);
  }

  return response.json();
}
