const formLogin = document.querySelector('.login-form');

const formData = {
    email: "",
    password: "",
    get showEmail() {
        console.log(this.email);
    },
    get showPassword() {
        console.log(this.password);
    },
};

formLogin.addEventListener('submit', e => {
    e.preventDefault();
    const {
        elements: { email, password }
    } = e.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert('Uzupełnij formularz!');
    };
    formData.email = email.value;
    formData.password = password.value;
    formData.showEmail;
    formData.showPassword;
    formLogin.reset();
});