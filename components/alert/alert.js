//dismiss alert

const btnDismissAlert = document.querySelectorAll('.btn-dismiss-alert');

btnDismissAlert.forEach(el => {
  el.addEventListener('click', e => {
    e.target.parentNode.parentNode.style.display = 'none';
  });
});
