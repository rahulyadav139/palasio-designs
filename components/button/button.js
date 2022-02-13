// test fab icon

const testFabNow = document.querySelector('#test-fab');
const testFabIcon = document.querySelector('#test-fab-icon');

testFabNow.addEventListener('click', () => {
  testFabIcon.style.visibility = 'visible';
});
