const btnDismiss = document.querySelector('.btn-dismiss-alert');
const alert = document.querySelector('.alert');

btnDismiss.addEventListener('click', () => {
  alert.style.display = 'none';
});
