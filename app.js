//toggle theme action

const checkbox = document.querySelector('.theme-toggle__checkbox');

checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark-theme');
});

//avatar-with-image container actions

const btnLiveDemoAvatarImage = document.querySelector(
  '.component-container-avatar-image__actions__btn-live-demo'
);
const btnCodeSnippetAvatarImage = document.querySelector(
  '.component-container-avatar-image__actions__btn-code-snippet'
);

const containerLiveDemoAvatarImage = document.querySelector(
  '.component-container-avatar-image__live-demo'
);
const containerCodeSnippetAvatarImage = document.querySelector(
  '.component-container-avatar-image__code-snippet'
);

btnCodeSnippetAvatarImage.addEventListener('click', () => {
  containerCodeSnippetAvatarImage.style.display = 'block';
  containerLiveDemoAvatarImage.style.display = 'none';
  btnCodeSnippetAvatarImage.classList.add('active');
  btnLiveDemoAvatarImage.classList.remove('active');
});

btnLiveDemoAvatarImage.addEventListener('click', () => {
  containerCodeSnippetAvatarImage.style.display = 'none';
  containerLiveDemoAvatarImage.style.display = 'flex';
  btnCodeSnippetAvatarImage.classList.remove('active');
  btnLiveDemoAvatarImage.classList.add('active');
});

//avatar-with-text container actions

const btnLiveDemoAvatarText = document.querySelector(
  '.component-container-avatar-text__actions__btn-live-demo'
);
const btnCodeSnippetAvatarText = document.querySelector(
  '.component-container-avatar-text__actions__btn-code-snippet'
);

const containerLiveDemoAvatarText = document.querySelector(
  '.component-container-avatar-text__live-demo'
);
const containerCodeSnippetAvatarText = document.querySelector(
  '.component-container-avatar-text__code-snippet'
);

btnCodeSnippetAvatarText.addEventListener('click', () => {
  containerCodeSnippetAvatarText.style.display = 'block';
  containerLiveDemoAvatarText.style.display = 'none';
  btnCodeSnippetAvatarText.classList.add('active');
  btnLiveDemoAvatarText.classList.remove('active');
});

btnLiveDemoAvatarText.addEventListener('click', () => {
  containerCodeSnippetAvatarText.style.display = 'none';
  containerLiveDemoAvatarText.style.display = 'flex';
  btnCodeSnippetAvatarText.classList.remove('active');
  btnLiveDemoAvatarText.classList.add('active');
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

//alert-mod container actions

const btnLiveDemoAlertMod = document.querySelector(
  '.component-container-alert-mod__actions__btn-live-demo'
);
const btnCodeSnippetAlertMod = document.querySelector(
  '.component-container-alert-mod__actions__btn-code-snippet'
);

const containerLiveDemoAlertMod = document.querySelector(
  '.component-container-alert-mod__live-demo'
);
const containerCodeSnippetAlertMod = document.querySelector(
  '.component-container-alert-mod__code-snippet'
);

btnCodeSnippetAlertMod.addEventListener('click', () => {
  containerCodeSnippetAlertMod.style.display = 'block';
  containerLiveDemoAlertMod.style.display = 'none';
  btnCodeSnippetAlertMod.classList.add('active');
  btnLiveDemoAlertMod.classList.remove('active');
});

btnLiveDemoAlertMod.addEventListener('click', () => {
  containerCodeSnippetAlertMod.style.display = 'none';
  containerLiveDemoAlertMod.style.display = 'flex';
  btnCodeSnippetAlertMod.classList.remove('active');
  btnLiveDemoAlertMod.classList.add('active');
});
