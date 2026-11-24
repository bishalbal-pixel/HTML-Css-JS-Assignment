// Q11 - student result system (bonus)

function getStudentName() {
  let name = prompt("Enter your name");
  return name;
}

function getMarks() {
  let m1 = Number(prompt("Enter marks of subject 1"));
  let m2 = Number(prompt("Enter marks of subject 2"));
  let m3 = Number(prompt("Enter marks of subject 3"));
  return [m1, m2, m3];
}

function calculateTotal(m1, m2, m3) {
  return m1 + m2 + m3;
}

function calculatePercentage(total) {
  return (total / 300) * 100;
}

function calculateGrade(percentage) {
  if (percentage >= 90) {
    return "A+";
  } else if (percentage >= 80) {
    return "A";
  } else if (percentage >= 70) {
    return "B";
  } else if (percentage >= 60) {
    return "C";
  } else if (percentage >= 50) {
    return "D";
  } else {
    return "F";
  }
}

function checkResult(m1, m2, m3) {
  if (m1 >= 40 && m2 >= 40 && m3 >= 40) {
    return "PASS";
  } else {
    return "FAIL";
  }
}

function displayResult() {
  let name = getStudentName();
  let marks = getMarks();
  let total = calculateTotal(marks[0], marks[1], marks[2]);
  let percentage = calculatePercentage(total);

  console.log("Student Name: " + name);
  console.log("Subject 1: " + marks[0]);
  console.log("Subject 2: " + marks[1]);
  console.log("Subject 3: " + marks[2]);
  console.log("Total Marks: " + total);
  console.log("Percentage: " + percentage.toFixed(2) + "%");
  console.log("Grade: " + calculateGrade(percentage));
  console.log("Result: " + checkResult(marks[0], marks[1], marks[2]));
}

displayResult();
