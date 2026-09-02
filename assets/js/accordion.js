// ======================================================
// ARQUIVO: accordion.js
// CAMADA: Interface
// MÓDULO: Acordeão
// RESPONSABILIDADE: Controlar abertura/fechamento das seções.
// O QUE ESTE ARQUIVO FAZ: Mantém apenas uma seção aberta por vez, sincroniza aria-expanded e colapsa o conteúdo fechado.
// IMPORTÂNCIA NO SISTEMA: Reproduz os estados individuais demonstrados no Figma.
// OBSERVAÇÃO ARQUITETURAL: Não contém dados profissionais.
// ======================================================

const accordions = document.querySelectorAll('.accordion');

function setAccordionState(accordion, isOpen) {
  const trigger = accordion.querySelector('.trigger');
  const content = accordion.querySelector('.content');

  accordion.classList.toggle('open', isOpen);

  if (trigger) {
    trigger.setAttribute('aria-expanded', String(isOpen));
  }

  if (content) {
    content.hidden = !isOpen;
  }
}

accordions.forEach((accordion) => {
  const trigger = accordion.querySelector('.trigger');

  // Estado inicial: todos os painéis começam totalmente recolhidos.
  setAccordionState(accordion, false);

  if (!trigger) return;

  trigger.addEventListener('click', () => {
    const willOpen = !accordion.classList.contains('open');

    accordions.forEach((item) => {
      if (item !== accordion) {
        setAccordionState(item, false);
      }
    });

    setAccordionState(accordion, willOpen);
  });
});
