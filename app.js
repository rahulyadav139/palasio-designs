//toggle theme action

const checkbox = document.querySelector('.theme-toggle__checkbox');

checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark-theme');
});

//alert-trad container actions

const btnLiveDemoAlertTrad = document.querySelector(
  '.component-container-alert-trad__actions__btn-live-demo'
);
const btnCodeSnippetAlertTrad = document.querySelector(
  '.component-container-alert-trad__actions__btn-code-snippet'
);

const containerLiveDemoAlertTrad = document.querySelector(
  '.component-container-alert-trad__live-demo'
);
const containerCodeSnippetAlertTrad = document.querySelector(
  '.component-container-alert-trad__code-snippet'
);

btnCodeSnippetAlertTrad.addEventListener('click', () => {
  containerCodeSnippetAlertTrad.style.display = 'block';
  containerLiveDemoAlertTrad.style.display = 'none';
  btnCodeSnippetAlertTrad.classList.add('active');
  btnLiveDemoAlertTrad.classList.remove('active');
});

btnLiveDemoAlertTrad.addEventListener('click', () => {
  containerCodeSnippetAlertTrad.style.display = 'none';
  containerLiveDemoAlertTrad.style.display = 'flex';
  btnCodeSnippetAlertTrad.classList.remove('active');
  btnLiveDemoAlertTrad.classList.add('active');
});
