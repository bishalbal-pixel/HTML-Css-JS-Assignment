// Array Q6: Check whether a student name entered by the user exists in the array

let students = ["Ram", "Sita", "Hari", "Gita", "Shyam", "Rita", "Bishal", "Anita"];

let searchName = prompt("Enter a student name to search:");

if (searchName !== null && students.includes(searchName.trim())) {
  console.log("Student Found");
} else {
  console.log("Student Not Found");
}
