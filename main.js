const email = document.getElementById('email');
const phoneNumber = document.getElementById('phone-number');
const password = document.getElementById('password');
const passwordRepeat = document.getElementById('password');

email.addEventListener('input', (e) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity('Please type a valid e-mail address');
    } else {
        email.setCustomValidity('');
    }
});