document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var terms = document.getElementById('terms').checked;

    if (!username || !email || !phone || !password || !confirmPassword) {
        alert('All fields must be filled out');
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        alert('Email must be in the correct format');
        return;
    }

    if (phone.length !== 10) {
        alert('Phone number must be 10 digits');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords must match');
        return;
    }

    if (!terms) {
        alert('You must agree to the terms and services');
        return;
    }

    alert('Form submitted successfully');
});