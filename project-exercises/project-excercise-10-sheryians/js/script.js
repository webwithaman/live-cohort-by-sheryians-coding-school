// Get Elements
let myForm = document.getElementById("myForm");
let usernameField = document.getElementById("username-field");
let emailField = document.getElementById("email-field");
let passwordField = document.getElementById("password-field");
let nameWarning = document.querySelector(".name-warning");
let emailWarning = document.querySelector(".email-warning");
let passwordWarning = document.querySelector(".password-warning");
let inputFields = document.querySelectorAll("input:not(.submit-btn)");
let formFeedbackIndicator = document.querySelector(".form-feedback-indicator");

let isSubmissionOff = false;

// Function to Validate Username
const isValidUsername = (usernameValue) => {
  let isValid = true,
    warningMessage,
    minLength = 3,
    maxLength = 30;

  usernameValue = usernameValue.trim();

  if (usernameValue.length === 0) {
    isValid = false;
    warningMessage = "📝 Please enter Username";
  } else {
    let regex = /^[a-z0-9]{3,30}$/;
    if (!regex.test(usernameValue)) {
      isValid = false;
      warningMessage =
        "⚠️ Username must be 3-30 chars, lowercase letters and numbers only (no special characters)";
    }
  }

  return { isValid, warningMessage };
};

// Function to Validate Email
const isValidEmail = (emailValue) => {
  let isValid = true,
    warningMessage;

  emailValue = emailValue.trim();

  if (emailValue.length === 0) {
    isValid = false;
    warningMessage = "📝 Please enter Email";
  } else {
    let regex =
      /^[a-zA-Z0-9]+(?:[._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(emailValue)) {
      isValid = false;
      warningMessage = "Please enter email in valid format";
    }
  }

  return { isValid, warningMessage };
};

// Function to Validate Password
const isValidPassword = (passwordValue) => {
  let isValid = true,
    warningMessage;

  passwordValue = passwordValue.trim();

  if (passwordValue.length === 0) {
    isValid = false;
    warningMessage = "📝 Please enter Password";
  } else {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;
    if (!regex.test(passwordValue)) {
      isValid = false;
      warningMessage =
        "⚠️ Password must be 8+ chars with at least 1 uppercase, 1 lowercase, 1 number & 🔒 1 special (@#*%).";
    }
  }

  return { isValid, warningMessage };
};

// Function to Validate Form
const isValidForm = () => {
  // Assume that All Fields Are Valid
  let isAllFieldsValid = true;

  // Is Username Valid
  let validityStatus = isValidUsername(usernameField.value);

  if (!validityStatus.isValid) {
    nameWarning.textContent = validityStatus.warningMessage;
    nameWarning.style.maxHeight = nameWarning.scrollHeight + "px";
    isAllFieldsValid = false;
  }

  // Is Email Valid
  validityStatus = isValidEmail(emailField.value);
  if (!validityStatus.isValid) {
    emailWarning.textContent = validityStatus.warningMessage;
    emailWarning.style.maxHeight = emailWarning.scrollHeight + "px";
    isAllFieldsValid = false;
  }

  // Is Password Valid
  validityStatus = isValidPassword(passwordField.value);
  if (!validityStatus.isValid) {
    passwordWarning.textContent = validityStatus.warningMessage;
    passwordWarning.style.maxHeight = passwordWarning.scrollHeight + "px";
    isAllFieldsValid = false;
  }

  return isAllFieldsValid;
};

// Add Submit Event on Form
myForm.addEventListener("submit", function (e) {
  // Prevent Default Behaviour of Auto Submission of Form
  e.preventDefault();

  if (!isSubmissionOff) {
    formFeedbackIndicator.style.display = "flex";
    isSubmissionOff = true;

    // Call isValidForm Function to Check Whether  ALl Fields Are Valid or Not (Is Form Valid)
    let formValidationStatus = isValidForm();

    // If True (Form is Valid)
    if (formValidationStatus) {
      formFeedbackIndicator.firstElementChild.classList.add("fa-check");
      formFeedbackIndicator.firstElementChild.classList.remove("fa-xmark");
      formFeedbackIndicator.lastElementChild.firstElementChild.textContent =
        "success";
      formFeedbackIndicator.lastElementChild.lastElementChild.textContent =
        "Form submitted successfully!";
      formFeedbackIndicator.classList.add("animate-form-feedback-indicator");
      formFeedbackIndicator.style.setProperty("--color", "rgb(0, 236, 0)");
      inputFields.forEach((element) => {
        element.value = "";
      });
    } else {
      formFeedbackIndicator.firstElementChild.classList.add("fa-xmark");
      formFeedbackIndicator.firstElementChild.classList.remove("fa-check");
      formFeedbackIndicator.lastElementChild.firstElementChild.textContent =
        "error";
      formFeedbackIndicator.lastElementChild.lastElementChild.textContent =
        "Submission failed. Try again!";
      formFeedbackIndicator.classList.add("animate-form-feedback-indicator");
      formFeedbackIndicator.style.setProperty("--color", "rgb(252, 4, 4)");
    }

    // Callback Function to Hide Form Feeback Container or Popup after Showing Feedback
    setTimeout(() => {
      formFeedbackIndicator.classList.remove("animate-form-feedback-indicator");
      formFeedbackIndicator.style.display = "none";
      isSubmissionOff = false;
      document.querySelectorAll(".warning").forEach((element) => {
        element.style.maxHeight = 0 + "px";
      });

      // Submitting Form If it is Valid
      if (formValidationStatus) {
        myForm.submit();
      }
    }, 2300);
  }
});

// Adding Focus Event on All Input Fields to Hide Warning Messages when Focused on Input Fields
inputFields.forEach((element) => {
  element.addEventListener("focus", function () {
    document.querySelectorAll(".warning").forEach((element) => {
      element.style.maxHeight = 0 + "px";
    });
  });
});

// Add Click Event on Password Toggler Icon to Show & Hide the Password
document.querySelector(".password-toggler").onclick = (e) => {
  if (e.target.classList.contains("fa-eye")) {
    e.target.classList.add("fa-eye-slash");
    e.target.classList.remove("fa-eye");
    document.querySelector("#password-field").type = "type";
  } else {
    e.target.classList.add("fa-eye");
    e.target.classList.remove("fa-eye-slash");
    document.querySelector("#password-field").type = "password";
  }
};
