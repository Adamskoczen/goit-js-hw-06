const buttonDcr = document.querySelector('[data-action="decrement"]');
const buttonIcr = document.querySelector('[data-action="increment"]');
const counterSpan = document.querySelector('#value');

let counterValue = 0;

const counterDcr = () => {
    counterValue--;
    counterSpan.textContent = counterValue;
};

const counterIcr = () => {
    counterValue++;
    counterSpan.textContent = counterValue;
};

buttonDcr.addEventListener('click', () => counterDcr());
buttonIcr.addEventListener('click', () => counterIcr());

