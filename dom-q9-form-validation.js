// DOM Q9: Validate the registration form when Submit is clicked

document.getElementById("registerForm").addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from reloading

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let message = document.getElementById("message");

  message.className = "error";

  if (name === "" || email === "" || password === "") {
    message.textContent = "All fields must be filled.";
  } else if (name.length < 3) {
    message.textContent = "Name must contain at least 3 characters.";
  } else if (!email.includes("@")) {
    message.textContent = "Email must contain @.";
  } else if (password.length < 6) {
    message.textContent = "Password must contain at least 6 characters.";
  } else {
    message.textContent = "Registration Successful!";
    message.className = "success";
  }
});
