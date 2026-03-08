// grabbing the signup-form
const signupForm = document.getElementById("signup-form");

// grabbing all input elements
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const profilePic = document.getElementById("profile-pic");
const document_ = document.getElementById("document");

// grabbing all error spans
const fullnameError = document.getElementById("fullname-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirm-password-error");
const profilePicError = document.getElementById("profile-pic-error");
const documentError = document.getElementById("document-error");

// listening for form submission
signupForm.addEventListener("submit", function (event) {
    event.preventDefault(); // prevents page from refreshing when submitting the form
    validateForm();
});

// the logic for validating the form
function validateForm() {
    let isValid = true; // assuming the form is valid
    // for fullname
    if (fullname.value.trim() === "") {
        fullnameError.textContent = "Full name is required!";
        isValid = false;
    } else {
        fullnameError.textContent = ""; // clearing the error
    }

    // for email
    if (email.value.trim() === "") {
        emailError.textContent = "Email is required!";
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^@\s]+$/.test(email.value)) { // checking if the email is in correct format
        emailError.textContent = "Please enter a valid email!";
        isValid = false;
    } else {
        emailError.textContent = ""; // clearing the error
    }

    // for password
    if (password.value.length < 8) {
        passwordError.textContent = "Password must be of 8 characters or more!";
        isValid = false;
    } else {
        passwordError.textContent = ""; // clearing the error
    }

    // for confirming the password
    if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = "Passwords don't match!";
        isValid = false;
    } else {
        confirmPasswordError.textContent = ""; // clearing the error
    }

    // for profile picture
    if (profilePic.files.length === 0) { // input files are stored in an array called .files
        profilePicError.textContent = "No file selected!";
        isValid = false;
    } else {
        const file = profilePic.files[0]; // storing the selected file in a variable
        // checking if the file size is greater than 2MB
        if (file.size > 2 * 1024 * 1024) {
            profilePicError.textContent = "File must be less than 2MB";
            isValid = false;
        } else {
            profilePicError.textContent = "";
        }
    }

    // for document attached
    if (document_.files.length === 0) { // checking if the file is selected
        documentError.textContent = "No file selected!";
        isValid = false;
    } else {
        documentError.textContent = "";
    }

    // if all fields are valid
    if (isValid) {
        alert("Form submitted successfully! 🎉");
    }
}