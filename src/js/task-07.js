const inputRange = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

inputRange.addEventListener('input', e => {
    spanText.style.fontSize = `${e.target.value}px`;
})