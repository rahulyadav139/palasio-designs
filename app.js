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

//highlight js

document.addEventListener('DOMContentLoaded', event => {
  document.querySelectorAll('pre code').forEach(el => {
    el.innerHTML = el.innerHTML
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
      .trim();
    hljs.highlightElement(el);
  });
});

// toggle sidebar in mobile mode

const sidebar = document.querySelector('.documentation-section__aside');

const btnSidebarShow = document.querySelector('.menu-toggler-show');

const btnSidebarHide = document.querySelector('.menu-toggler-hide');

btnSidebarShow.addEventListener('click', () => {
  btnSidebarHide.style.visibility = 'visible';
  sidebar.style.visibility = 'visible';
});

btnSidebarHide.addEventListener('click', () => {
  btnSidebarHide.style.visibility = 'hidden';
  sidebar.style.visibility = 'hidden';
});
