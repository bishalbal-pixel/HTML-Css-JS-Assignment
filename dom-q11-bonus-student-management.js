// DOM Q11 (Bonus): Student Management System Using JavaScript DOM

const fieldIds = ["name", "roll", "section", "age", "address", "phone"];

function showMessage(text, type) {
  let message = document.getElementById("message");
  message.textContent = text;
  message.className = type; // "error" or "success"
}

function addStudent() {
  // 1. Get all student information from the input fields
  let name = document.getElementById("name").value.trim();
  let roll = document.getElementById("roll").value.trim();
  let section = document.getElementById("section").value.trim();
  let age = document.getElementById("age").value.trim();
  let address = document.getElementById("address").value.trim();
  let phone = document.getElementById("phone").value.trim();

  // 4. Validate that the roll number is not empty
  if (roll === "") {
    showMessage("Roll number cannot be empty.", "error");
    return;
  }

  // 2. Check whether all input fields are filled
  if (name === "" || section === "" || age === "" || address === "" || phone === "") {
    showMessage("Please fill in all the fields.", "error");
    return;
  }

  // 3. Validate that the age is greater than 0
  if (isNaN(Number(age)) || Number(age) <= 0) {
    showMessage("Age must be a number greater than 0.", "error");
    return;
  }

  // 5 & 6. Create a new table row with the student's details
  let row = document.createElement("tr");
  let values = [roll, name, section, age, address, phone];

  for (let i = 0; i < values.length; i++) {
    let cell = document.createElement("td");
    cell.textContent = values[i];
    row.appendChild(cell);
  }

  // 7. Add a Delete button for each student record
  let actionCell = document.createElement("td");
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  // 8. Remove the corresponding record when Delete is clicked
  deleteButton.addEventListener("click", function () {
    row.remove();
    showMessage("Student " + name + " deleted successfully.", "success");
  });

  actionCell.appendChild(deleteButton);
  row.appendChild(actionCell);

  document.getElementById("studentTable").appendChild(row);

  // 10. Display a success message
  showMessage("Student added successfully!", "success");
  clearInputs();
}

// Empty every input field
function clearInputs() {
  for (let i = 0; i < fieldIds.length; i++) {
    document.getElementById(fieldIds[i]).value = "";
  }
}

// 9. Clear all input fields when Clear Form is clicked
function clearForm() {
  clearInputs();
  showMessage("Form cleared.", "success");
}
