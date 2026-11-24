// Q9 - grade calculator
function calculateGrade(marks) {
  if (marks < 0 || marks > 100) {
    return "Invalid marks";
  } else if (marks >= 90) {
    return "A+";
  } else if (marks >= 80) {
    return "A";
  } else if (marks >= 70) {
    return "B";
  } else if (marks >= 60) {
    return "C";
  } else if (marks >= 50) {
    return "D";
  } else {
    return "F";
  }
}

console.log("Student Grade: " + calculateGrade(85));
console.log("Student Grade: " + calculateGrade(95));
console.log("Student Grade: " + calculateGrade(45));
console.log("Student Grade: " + calculateGrade(120));
