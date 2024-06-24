let userEmail = ['Arjay2721@gmail.com', 'Claire2721@gmail.com', 'Marlon2000@gmail.com', '1@1.com'];
let userPass = ['Arjay2721', 'Claire2721', 'Marlon2000', '12345'];

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

document.getElementById('loginForm').addEventListener('submit', login);
document.getElementById('registerForm').addEventListener('submit', register);

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
})

btnPopup.addEventListener('click', () => {
    if (btnPopup.classList.contains('disabled')) {
        let confirmLogout = confirm('Are you sure you want to log out?');
        if (confirmLogout) {
            btnPopup.innerHTML = "Login";
            btnPopup.classList.remove('disabled');
            btnPopup.setAttribute('aria-disabled', 'false');
            btnPopup.style.backgroundColor = ''; // Reset background color
            btnPopup.style.color = ''; // Reset text color
        }
    } else {
        wrapper.classList.add('active-popup');
    }
})

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
})

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
        alert('LOGIN SUCCESSFUL');
        document.getElementById('loginForm').reset(); // Reset the form fields
        btnPopup.innerHTML = "Signed";
        btnPopup.classList.add('disabled'); // Add a class to style the button as disabled
        btnPopup.setAttribute('aria-disabled', 'true'); // Set ARIA attribute for accessibility
        btnPopup.style.backgroundColor = '#271f1a'; // Change background color to dark
        btnPopup.style.color = 'white'; // Change text color to white
        wrapper.classList.remove('active-popup'); // Close the popup
        // window.location.href = 'home.html'; // Redirect to home.html if authenticated
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

    for (let i = 0; i < userEmail.length; i++) {
        if (email === userEmail[i]) {
            emailMatched = true;
            break; // Exit the loop once a match is found
        }
    }

    if (emailMatched) {
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

// Add hover event listeners
btnPopup.addEventListener('mouseenter', () => {
    if (btnPopup.classList.contains('disabled')) {
        btnPopup.innerHTML = "Logout?";
        btnPopup.style.backgroundColor = '#836957'; // Change background color to red
    }
});

btnPopup.addEventListener('mouseleave', () => {
    if (btnPopup.classList.contains('disabled')) {
        btnPopup.innerHTML = "Signed";
        btnPopup.style.backgroundColor = '#271f1a'; // Revert background color to dark
    }
});
