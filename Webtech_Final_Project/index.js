// Basic DataBase (Local)
let userEmail = ['Arjay2721@gmail.com', 'Claire2721@gmail.com', 'Marlon2000@gmail.com'];
let userPass = ['Arjay2721', 'Claire2721', 'Marlon2000'];

// Attach login function to form submit event
document.getElementById('loginForm').addEventListener('submit', login);
document.getElementById('registerForm').addEventListener('submit', register);

function authenticate() {
    let inputEmail = document.getElementById('iEmail').value;
    let inputPass = document.getElementById('iPass').value;
    let index = -1;

    console.log(inputEmail);
    console.log(inputPass);

    for (let i = 0; i < userEmail.length; i++) {
        if (inputEmail === userEmail[i] && inputPass === userPass[i]) {
            index = i;
            break; // Exit the loop once a match is found
        }
    }
    console.log(index);
    return index;
}

function login(event) {
    event.preventDefault(); // Prevent form submission
    let index = authenticate();

    if (index === -1) {
        alert('LOGIN FAILED!'); // Show alert if login fails
    } else {
        window.location.href = 'home.html'; // Redirect to home.html if authenticated
    }
}

document.getElementById('show-pass').addEventListener('change', showPass);

function showPass() {
    let pass = document.getElementById('iPass');
    let box = document.getElementById('show-pass');

    if (box.checked) {
        pass.type = 'text';
    } else {
        pass.type = 'password';
    }
}

// Add event listener for "Forgot Password?" link
document.getElementById('forg-pass').addEventListener('click', askQuestion);

function askQuestion() {
    let question = "Enter your Email Address:";
    let userAnswer = prompt(question);
    let index = -1; // Initialize index variable

    // Search for the email in the userEmail array
    for (let i = 0; i < userEmail.length; i++) {
        if (userAnswer === userEmail[i]) {
            index = i;
            break; // Exit the loop once a match is found
        }
    }

    // Display appropriate response based on the search result
    if (index === -1) {
        alert("Input didn't match any in the database!");
    } else {
        alert(`Your password is: ${userPass[index]}`);
    }
}

function register(event) {
    event.preventDefault(); // Prevent form submission

    let email = document.getElementById('rEmail').value;
    let pass = document.getElementById('rPass').value;
    let repPass = document.getElementById('rRepPass').value;
    let termsCheckbox = document.getElementById('terms-checkbox').checked;
    let emailMatched = false;

    for (let i = 0; i <userEmail.length; i++){
        if (email === userEmail[i]) {
            emailMatched = true;
            break; // Exit the loop once a match is found
        }
    }

    if (emailMatched){
        alert('Email has a match!');
        return;
    }

    if (pass !== repPass) {
        alert('Passwords did not match.');
        return;
    }

    if (!termsCheckbox) {
        alert('You must agree to the terms and conditions.');
        return;
    }

    // Add new user to the database
    userEmail.push(email);
    userPass.push(pass);

    alert('Registration successful!');
    document.getElementById('registerForm').reset(); // Reset the form fields
    wrapper.classList.remove('active');
    wrapper.classList.add('active-popup');
}

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
})

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
})

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
})
