// access mobile navigation

const hamburgerIcon = document.querySelector('.hamburger-icon');
const hamburgerMenu = document.querySelector('.hamburger-menu');

const hamburgerBackdrop = document.querySelector('.hamburger-menu__backdrop');

hamburgerIcon.addEventListener('click', () => {
  hamburgerBackdrop.classList.remove('hidden');
  hamburgerMenu.classList.remove('hamburger-menu--hide');
  document.querySelector('body').classList.add('overflow-hidden');
});
hamburgerBackdrop.addEventListener('click', () => {
  hamburgerBackdrop.classList.add('hidden');
  hamburgerMenu.classList.add('hamburger-menu--hide');
  document.querySelector('body').classList.remove('overflow-hidden');
});
