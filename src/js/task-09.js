function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const hexText = document.querySelector('.color');
const hexBtn = document.querySelector('.change-color');

hexBtn.addEventListener('click', e => {
  hexText.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
});
