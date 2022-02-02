const searchContainer = document.querySelector('.search-input');
const searchInputField = searchContainer.querySelector('input');

searchInputField.addEventListener('focus', () => {
  searchContainer.style.backgroundColor = 'var(--text-input-bg-color)';
  searchInputField.style.backgroundColor = 'var(--text-input-bg-color)';
});

searchInputField.addEventListener('blur', () => {
  searchContainer.style.backgroundColor = 'transparent';
  searchInputField.style.backgroundColor = 'transparent';
});
