const formLogin = document.querySelector('.login-form');

const handeSubmit = (e) => {
    e.preventDefault();
    const {
        elements: { email, password }
    } = e.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert('Uzupełnij formularz!');
    };
    const result = { Email: email.value, Password: password.value}
    console.log(result);
    e.currentTarget.reset();
}

formLogin.addEventListener('submit', handeSubmit);