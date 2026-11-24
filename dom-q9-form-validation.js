function validate() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let msg = document.getElementById("msg");

  if (name == "" || email == "" || password == "") {
    msg.textContent = "Please fill all fields";
  } else if (name.length < 3) {
    msg.textContent = "Name must have at least 3 characters";
  } else if (!email.includes("@")) {
    msg.textContent = "Email must contain @";
  } else if (password.length < 6) {
    msg.textContent = "Password must have at least 6 characters";
  } else {
    msg.textContent = "Registration Successful!";
  }
}
