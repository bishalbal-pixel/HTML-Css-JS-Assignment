// Function Q9: Calculate a student's grade from marks

function calculateGrade(marks) {
  if (marks < 0 || marks > 100) {
    return "Invalid Marks";
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

let testMarks = [95, 85, 72, 65, 55, 30, 105, -5];

for (let i = 0; i < testMarks.length; i++) {
  let grade = calculateGrade(testMarks[i]);
  console.log("Marks: " + testMarks[i] + " -> Student Grade: " + grade);
}
