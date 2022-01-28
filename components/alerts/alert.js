const btnDismiss = document.querySelector('.btn-dismiss-alert');
const alert = document.querySelector('.alert');

console.log('test');
btnDismiss.addEventListener('click', () => {
  console.log('test');
  alert.style.display = 'none';
});
