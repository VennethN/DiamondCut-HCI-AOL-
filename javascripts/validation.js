

function validateData()
{

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
    if(username.length < 5 || username.length > 20) {
        alert("Username must be between 5 and 20 characters");
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        alert('Email must be in the correct format');
        return;
    }

    if (phone.length < 10 || phone.length > 12) {
        alert('Phone number must be between 10-12 digits');
        return;
    }
    if (password.length < 5) {
        alert('Password must be at least 5 characters')
        return;
    }
    if (!containsCapitalLetter(password)) {
        alert('Password must contain at least one capital letter');
        return;
    }
    if (!containsNumber(password)) {
        alert('Password must contain at least one number');
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

}

function containsCapitalLetter(password) {
    for (var i = 0; i < password.length; i++) {
        var char = password[i];
        if (char === char.toUpperCase() && char !== char.toLowerCase()) {
            return true;
        }
    }
    return false;
}

function containsNumber(password) {
    for (var i = 0; i < password.length; i++) {
        if (!isNaN(parseInt(password[i]))) {
            return true;
        }
    }
    return false;
}