const searchContainer = document.querySelector('.input-field-icon');
const searchInputField = searchContainer.querySelector('input');

searchInputField.addEventListener('focus', () => {
  searchContainer.style.backgroundColor = 'var(--input-bg-color)';
  searchInputField.style.backgroundColor = 'var(--input-bg-color)';
});

searchInputField.addEventListener('blur', () => {
  searchContainer.style.backgroundColor = 'transparent';
  searchInputField.style.backgroundColor = 'transparent';
});
