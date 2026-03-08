// grabbing the login-form
const loginForm = document.getElementById("login-form");

// grabbing all input elements of the form
const email = document.getElementById("email");
const password = document.getElementById("password");

// grabbing all error spans
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

// listening for form submission
loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent the page from refreshing
    validateForm();
});

// logic for validateForm
function validateForm() {
    let isValid = true; // assume all fields are valid

    // for email validation
    if (email.value.trim() === ""){
        emailError.textContent = "Email is required!";
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
        emailError.textContent = "Please enter a valid email!";
        isValid = false;
    } else {
        emailError.textContent = ""; // clearing the error
    }

    // for password validation
    if (password.value.trim() === "") { // check if the password is empty
        passwordError.textContent = "Password cannot be empty!";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    // if all the fields are entered correctly
    if (isValid) {
        alert("You are successfully logged in! 🎉");
    }
}