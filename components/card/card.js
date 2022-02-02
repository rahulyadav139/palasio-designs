const btnDismiss = document.querySelector('.dismiss');

btnDismiss.addEventListener('click', e => {
  btnDismiss.parentElement.style.display = 'none';
});
