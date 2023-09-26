document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const fullname = document.getElementById("fullname");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm_password");
  const dateOfBirth = document.getElementById("date_of_birth");
  const submitButton = document.getElementById("submit-button");

  function validateFullname() {
    const fullnameRegex = /^[a-zA-Z\s]+$/;
    return fullnameRegex.test(fullname.value);
  }

  function validateEmail() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email.value);
  }

  function validatePassword() {
    return password.value.length >= 8;
  }

  function validateConfirmPassword() {
    return confirmPassword.value === password.value;
  }

  function validateDateOfBirth() {
    const today = new Date();
    const birthDate = new Date(dateOfBirth.value);
    const age = today.getFullYear() - birthDate.getFullYear();
    return age >= 18;
  }

  function enableSubmitButton() {
    if (
      validateFullname() &&
      validateEmail() &&
      validatePassword() &&
      validateConfirmPassword() &&
      validateDateOfBirth()
    ) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  }

  function updateValidationStatus(element, isValid, errorMessage) {
    const errorElement = element.nextElementSibling;
    errorElement.innerHTML = isValid ? "" : errorMessage;
    errorElement.style.color = "red";
  }

  fullname.addEventListener("input", () => {
    updateValidationStatus(fullname, validateFullname(), "Please enter a valid name.");
    enableSubmitButton();
  });

  email.addEventListener("input", () => {
    updateValidationStatus(email, validateEmail(), "Invalid email address.");
    enableSubmitButton();
  });

  password.addEventListener("input", () => {
    updateValidationStatus(
      password,
      validatePassword(),
      "Password must be at least 8 characters long."
    );
    validateConfirmPassword();
    enableSubmitButton();
  });

  confirmPassword.addEventListener("input", () => {
    const errorMessage = validateConfirmPassword()
      ? ""
      : "Passwords do not match.";
    updateValidationStatus(confirmPassword, validateConfirmPassword(), errorMessage);
    enableSubmitButton();
  });

  dateOfBirth.addEventListener("input", () => {
    updateValidationStatus(
      dateOfBirth,
      validateDateOfBirth(),
      "You must be at least 18 years old to register."
    );
    enableSubmitButton();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    if (
      validateFullname() &&
      validateEmail() &&
      validatePassword() &&
      validateConfirmPassword() &&
      validateDateOfBirth()
    ) {
      const userDetailsString =
        `User Details:\n\n` +
        `Full Name: ${fullname.value}\n` +
        `Email: ${email.value}\n` +
        `Password: ${password.value}\n` +
        `Date of Birth: ${dateOfBirth.value}`;

      alert(userDetailsString);
    }
  });

});
