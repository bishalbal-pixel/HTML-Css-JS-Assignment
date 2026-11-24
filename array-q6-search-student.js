// Q6 - search student
let students = ["Ram", "Sita", "Hari", "Gita", "Shyam", "Rita", "Bishal", "Anita"];

let name = prompt("Enter student name");

if (students.includes(name)) {
  console.log("Student Found");
} else {
  console.log("Student Not Found");
}
