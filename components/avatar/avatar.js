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
