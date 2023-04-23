let loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', e => {
e.preventDefault();

const formData = new FormData(e.target);
const formObject = Object.fromEntries(formData.entries());

if (formObject.email === '' || formObject.password === '') {
    alert('All fields are required');
} else {
    console.log(formObject);
    loginForm.reset();
}
});
