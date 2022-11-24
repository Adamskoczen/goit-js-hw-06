const inputIn = document.querySelector('#validation-input');

const inputCheck = inputIn.getAttribute('data-length');

inputIn.addEventListener('blur', e => {
    if (e.target.value.length == inputCheck) {
        inputIn.classList.remove('invalid');
        inputIn.classList.add('valid');
    } else {
        inputIn.classList.remove('valid');
        inputIn.classList.add('invalid');
    }
});