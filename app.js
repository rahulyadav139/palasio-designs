//toggle theme action

const checkbox = document.querySelector('.theme-toggle__checkbox');

checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark-theme');
});

//avatar container actions

const btnLiveDemoAvatar = document.querySelector(
  '.container-avatar__btn-live-demo'
);
const btnCodeSnippetAvatar = document.querySelector(
  '.container-avatar__btn-code-snippet'
);

const containerLiveDemoAvatar = document.querySelector(
  '.container-avatar__live-demo'
);
const containerCodeSnippetAvatar = document.querySelector(
  '.container-avatar__code-snippet'
);

btnCodeSnippetAvatar.addEventListener('click', () => {
  containerCodeSnippetAvatar.style.display = 'block';
  containerLiveDemoAvatar.style.display = 'none';
  btnCodeSnippetAvatar.classList.add('active');
  btnLiveDemoAvatar.classList.remove('active');
});

btnLiveDemoAvatar.addEventListener('click', () => {
  containerCodeSnippetAvatar.style.display = 'none';
  containerLiveDemoAvatar.style.display = 'flex';
  btnCodeSnippetAvatar.classList.remove('active');
  btnLiveDemoAvatar.classList.add('active');
});
