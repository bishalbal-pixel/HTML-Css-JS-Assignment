// Function Q11 (Bonus): Student Result Management System Using Functions

// 1. Ask for the student's name and return it
function getStudentName() {
  let name = prompt("Enter student name:");
  if (name === null || name.trim() === "") {
    return "Unknown";
  }
  return name.trim();
}

// Asks for one subject's mark until a valid number (0-100) is entered
function getValidMark(subjectNumber) {
  while (true) {
    let input = prompt("Enter marks for Subject " + subjectNumber + " (0-100):");
    if (input === null) {
      return 0; // user pressed Cancel
    }
    let mark = Number(input);
    if (input.trim() !== "" && !isNaN(mark) && mark >= 0 && mark <= 100) {
      return mark;
    }
    alert("Invalid marks. Please enter a number between 0 and 100.");
  }
}

// 2. Ask for three subject marks and return them
function getMarks() {
  let mark1 = getValidMark(1);
  let mark2 = getValidMark(2);
  let mark3 = getValidMark(3);
  return [mark1, mark2, mark3];
}

// 3. Return the total of three marks
function calculateTotal(m1, m2, m3) {
  return m1 + m2 + m3;
}

// 4. Return the percentage (each subject is out of 100)
function calculatePercentage(total) {
  return (total / 300) * 100;
}

// 5. Return the grade for a percentage
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

// 6. A student passes only if every subject is at least 40
function checkResult(m1, m2, m3) {
  if (m1 >= 40 && m2 >= 40 && m3 >= 40) {
    return "PASS";
  }
  return "FAIL";
}

// 7. Display all student information and the final result
function displayResult(name, marks, total, percentage, grade, result) {
  console.log("Student Name:", name);
  console.log("Subject 1:", marks[0]);
  console.log("Subject 2:", marks[1]);
  console.log("Subject 3:", marks[2]);
  console.log("Total Marks:", total);
  console.log("Percentage: " + percentage.toFixed(2) + "%");
  console.log("Grade:", grade);
  console.log("Result:", result);
}

// Main program: calls all the functions in order
function main() {
  let name = getStudentName();
  let marks = getMarks();
  let total = calculateTotal(marks[0], marks[1], marks[2]);
  let percentage = calculatePercentage(total);
  let grade = calculateGrade(percentage);
  let result = checkResult(marks[0], marks[1], marks[2]);
  displayResult(name, marks, total, percentage, grade, result);
}

main();
