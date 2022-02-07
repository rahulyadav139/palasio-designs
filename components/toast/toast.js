const btnTest = document.querySelector('.toast-test');
const toast = document.querySelector('#toast');
const btnSnackbar = document.querySelector('.snackbar-test');
const snackbar = document.querySelector('.snackbar');

btnTest.addEventListener('click', () => {
  toast.classList.remove('hidden');
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 2000);
});

btnSnackbar.addEventListener('click', () => {
  snackbar.classList.remove('hidden');
});

// dismiss snackbar

document
  .querySelector('.btn-snackbar-dismiss')
  .addEventListener('click', () => {
    snackbar.classList.add('hidden');
  });
