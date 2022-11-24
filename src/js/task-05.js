const inputIn = document.querySelector('#name-input');
const nameOut = document.querySelector('#name-output');

inputIn.addEventListener('input', e => {
  nameOut.textContent = e.target.value;
  if(nameOut.textContent === "") nameOut.textContent = "Anonymous"
});