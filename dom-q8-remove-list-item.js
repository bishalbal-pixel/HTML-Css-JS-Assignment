function removeStudent() {
  let list = document.getElementById("students");
  let last = list.lastElementChild;

  if (last == null) {
    alert("No students left in the list");
  } else {
    last.remove();
  }
}
