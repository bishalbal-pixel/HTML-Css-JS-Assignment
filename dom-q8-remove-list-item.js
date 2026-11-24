// DOM Q8: Remove the last student from the list

function removeLastStudent() {
  let list = document.getElementById("studentList");
  let lastStudent = list.lastElementChild;
  let message = document.getElementById("message");

  // Handle the case when the list is already empty
  if (lastStudent === null) {
    message.textContent = "The list is empty. No student to remove.";
    return;
  }

  lastStudent.remove();

  if (list.lastElementChild === null) {
    message.textContent = "All students have been removed. The list is now empty.";
  }
}
