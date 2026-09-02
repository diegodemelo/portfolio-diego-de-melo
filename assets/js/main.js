// ======================================================
// ARQUIVO: main.js
// CAMADA: Interface
// MÓDULO: Perfil
// RESPONSABILIDADE: Renderizar dados profissionais no DOM.
// O QUE ESTE ARQUIVO FAZ: Atualiza cabeçalho, skills, idiomas, educação, projetos e experiência prática.
// IMPORTÂNCIA NO SISTEMA: Mantém a página orientada a dados, como no desafio original.
// OBSERVAÇÃO ARQUITETURAL: Conteúdo deve permanecer em data/profile.json.
// ======================================================

function setText(id, value) {
  const element = document.getElementById(id);
  if (element && value) element.textContent = value;
}

function safeShortUrl(url) {
  return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
}

function updateProfileInfo(profile) {
  const photo = document.getElementById('profile.photo');
  if (photo && profile.photo) {
    photo.src = profile.photo;
    photo.alt = `Foto de perfil de ${profile.name}`;
  }

  setText('profile.name', profile.name);
  setText('profile.job', profile.job);

  const github = document.getElementById('profile.github');
  if (github && profile.social?.github) {
    github.href = profile.social.github;
    github.textContent = safeShortUrl(profile.social.github);
  }

  const linkedin = document.getElementById('profile.linkedin');
  if (linkedin && profile.social?.linkedin) {
    linkedin.href = profile.social.linkedin;
    linkedin.textContent = safeShortUrl(profile.social.linkedin);
  }
}

function updateSkills(profile) {
  const hardSkills = document.getElementById('profile.skills.hardSkills');
  const knowledge = document.getElementById('profile.skills.knowledge');

  if (hardSkills) {
    hardSkills.innerHTML = profile.skills.hardSkills
      .map((skill) => `
        <li title="${skill.name}">
          <span class="tech-icon-wrap" aria-hidden="true">
            <img
              class="tech-icon"
              src="${skill.icon}"
              alt=""
              width="54"
              height="54"
              loading="lazy"
              decoding="async"
            >
          </span>
          <span class="tech-name">${skill.name}</span>
        </li>
      `)
      .join('');
  }

  if (knowledge) {
    knowledge.innerHTML = profile.skills.knowledge
      .map((item) => `<li>${item}</li>`)
      .join('');
  }
}

function updateLanguages(profile) {
  const languages = document.getElementById('profile.languages');
  if (!languages) return;
  languages.innerHTML = (profile.languages || []).map((language) => `<li>${language}</li>`).join('');
}

function renderTimeline(targetId, items) {
  const target = document.getElementById(targetId);
  if (!target) return;

  target.innerHTML = (items || [])
    .map((item) => `
      <li>
        <h3>${item.name}</h3>
        <p class="period">${item.period}</p>
        <p class="description">${item.description}</p>
      </li>
    `)
    .join('');
}

function updatePortfolio(profile) {
  const portfolio = document.getElementById('profile.portfolio');
  if (!portfolio) return;

  portfolio.innerHTML = (profile.portfolio || [])
    .map((project) => `
      <li class="project-card">
        <h3>${project.name}</h3>
        <p class="project-description">${project.description}</p>
        <a class="project-link" href="${project.url}" target="_blank" rel="noopener noreferrer">${safeShortUrl(project.url)}</a>
      </li>
    `)
    .join('');
}

(async () => {
  try {
    const profile = await fetchProfileData();
    updateProfileInfo(profile);
    updateSkills(profile);
    updateLanguages(profile);
    renderTimeline('profile.education', profile.education);
    updatePortfolio(profile);
    renderTimeline('profile.experience', profile.experience);
  } catch (error) {
    console.error(error);
    const main = document.querySelector('.main');
    if (main) {
      const notice = document.createElement('p');
      notice.className = 'data-error';
      notice.textContent = 'Não foi possível carregar todos os dados do portfólio. Execute o projeto por um servidor HTTP local.';
      main.prepend(notice);
    }
  }
})();
