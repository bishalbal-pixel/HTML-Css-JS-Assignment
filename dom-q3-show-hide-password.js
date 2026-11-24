// DOM Q3: Toggle the password field between hidden and visible

function togglePassword() {
  let passwordInput = document.getElementById("password");
  let button = document.getElementById("toggleBtn");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    button.textContent = "Hide Password";
  } else {
    passwordInput.type = "password";
    button.textContent = "Show Password";
  }
}
