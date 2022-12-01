function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputIn = document.querySelector('input');
const createElements = document.querySelector('[data-create]');
const destroyElements = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

let divCounter = 30;

const createBoxes = amount => {
    for (let i = 0; i < amount ; i++) {
    const divNew = document.createElement('div');
    divNew.style.backgroundColor = getRandomHexColor();
    divNew.style.height = `${divCounter}px`;
    divNew.style.width = `${divCounter}px`;
    divCounter += 10;
    boxes.appendChild(divNew);
  }
};

const destroyBoxes = () => {
  divCounter = 30;
  inputIn.value = "";
  boxes.innerHTML = "";
  };

createElements.addEventListener('click', () => {
  createBoxes(inputIn.value);
});
destroyElements.addEventListener('click', destroyBoxes);