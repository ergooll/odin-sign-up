const email = document.getElementById('email');

email.addEventListener('input', (e) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity('Please type a valid e-mail address');
    } else {
        email.setCustomValidity('');
    }
});