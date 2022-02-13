const btnModalDismiss = document.querySelectorAll('.btn-modal-dismiss');

btnModalDismiss.forEach(el =>
  el.addEventListener('click', e => {
    e.target.parentElement.parentElement.parentElement.classList.add('hidden');
  })
);

document.querySelector('.show-modal').addEventListener('click', () => {
  document.querySelector('.modal-backdrop').classList.remove('hidden');
});
