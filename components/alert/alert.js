const btnDismiss = document.querySelector('.btn-dismiss-alert');
const alert = document.querySelector('.alert');

btnDismiss.addEventListener('click', () => {
  alert.style.display = 'none';
});

//alert container actions

const btnLiveDemoAlert = document.querySelector(
  '.component-container-alert__actions__btn-live-demo'
);
const btnCodeSnippetAlert = document.querySelector(
  '.component-container-alert__actions__btn-code-snippet'
);

const containerLiveDemoAlert = document.querySelector(
  '.component-container-alert__live-demo'
);
const containerCodeSnippetAlert = document.querySelector(
  '.component-container-alert__code-snippet'
);

btnCodeSnippetAlert.addEventListener('click', () => {
  containerCodeSnippetAlert.style.display = 'block';
  containerLiveDemoAlert.style.display = 'none';
  btnCodeSnippetAlert.classList.add('active');
  btnLiveDemoAlert.classList.remove('active');
});

btnLiveDemoAlert.addEventListener('click', () => {
  containerCodeSnippetAlert.style.display = 'none';
  containerLiveDemoAlert.style.display = 'flex';
  btnCodeSnippetAlert.classList.remove('active');
  btnLiveDemoAlert.classList.add('active');
});

//alert with dismiss container actions

const btnLiveDemoAlertWithDismiss = document.querySelector(
  '.component-container-alert-with-dismiss__actions__btn-live-demo'
);
const btnCodeSnippetAlertWithDismiss = document.querySelector(
  '.component-container-alert-with-dismiss__actions__btn-code-snippet'
);

const containerLiveDemoAlertWithDismiss = document.querySelector(
  '.component-container-alert-with-dismiss__live-demo'
);
const containerCodeSnippetAlertWithDismiss = document.querySelector(
  '.component-container-alert-with-dismiss__code-snippet'
);

btnCodeSnippetAlertWithDismiss.addEventListener('click', () => {
  containerCodeSnippetAlertWithDismiss.style.display = 'block';
  containerLiveDemoAlertWithDismiss.style.display = 'none';
  btnCodeSnippetAlertWithDismiss.classList.add('active');
  btnLiveDemoAlertWithDismiss.classList.remove('active');
});

btnLiveDemoAlertWithDismiss.addEventListener('click', () => {
  containerCodeSnippetAlertWithDismiss.style.display = 'none';
  containerLiveDemoAlertWithDismiss.style.display = 'flex';
  btnCodeSnippetAlertWithDismiss.classList.remove('active');
  btnLiveDemoAlertWithDismiss.classList.add('active');
});
