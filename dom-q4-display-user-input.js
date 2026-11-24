// DOM Q4: Display a greeting using the name entered by the user

function showGreeting() {
  let name = document.getElementById("studentName").value.trim();
  let result = document.getElementById("result");

  if (name === "") {
    result.textContent = "Please enter your name.";
    result.className = "error";
  } else {
    result.textContent = "Hello, " + name + "! Welcome to the class.";
    result.className = "success";
  }
}
