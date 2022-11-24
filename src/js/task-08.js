const formLogin = document.querySelector('.login-form');

formLogin.addEventListener('submit', e => {
    e.preventDefault();
    const {
        elements: { email, password }
    } = e.currentTarget;
    if (email.value === "" || password.value === "") {
        alert('Uzupełnij formularz!');
    };
    formData.changeMail = email.value;
    formData.changePassword = password.value;
    console.log(formData.email);
    console.log(formData.password);
    formLogin.reset();
});

const formData = {
    email,
    password,
    changeMail(newMail) {
        this.email = changeEmail;
    },
    changePassword(newPassword) {
        this.password = this.changePassword;
    },
};