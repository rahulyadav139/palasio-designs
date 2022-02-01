//toggle theme action

const checkbox = document.querySelector('.theme-toggle__checkbox');

checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark-theme');
});

//toggle live and code snippet

const btnLiveDemo = document.querySelectorAll(
  '.component-container__actions__btn-live-demo'
);

const btnCodeSnippet = document.querySelectorAll(
  '.component-container__actions__btn-code-snippet'
);

btnLiveDemo.forEach(el => {
  el.addEventListener('click', e => {
    e.target.parentNode.nextElementSibling.style.display = 'flex';
    e.target.parentNode.nextElementSibling.nextElementSibling.style.display =
      'none';
    e.target.nextElementSibling.classList.remove('active');
    e.target.classList.add('active');
  });
});
btnCodeSnippet.forEach(el => {
  el.addEventListener('click', e => {
    e.target.parentNode.nextElementSibling.style.display = 'none';
    e.target.parentNode.nextElementSibling.nextElementSibling.style.display =
      'block';
    e.target.previousElementSibling.classList.remove('active');
    e.target.classList.add('active');
  });
});

//dismiss alert

const btnDismissAlert = document.querySelectorAll('.btn-dismiss-alert');

btnDismissAlert.forEach(el => {
  el.addEventListener('click', e => {
    e.target.parentNode.style.display = 'none';
  });
});
