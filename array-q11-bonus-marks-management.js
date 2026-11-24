// Array Q11 (Bonus): Student Marks Management System

let marks = [75, 45, 90, 32, 60];

// 1. Display all student marks
console.log("1. All Student Marks:");
for (let i = 0; i < marks.length; i++) {
  console.log("   Student " + (i + 1) + ": " + marks[i]);
}

// 2. Add a new student's mark
marks.push(85);
console.log("2. After adding new mark (85):", marks);

// 3. Remove the last student's mark
let removedMark = marks.pop();
console.log("3. Removed last mark (" + removedMark + "):", marks);

// 4. Calculate total marks
let total = 0;
for (let i = 0; i < marks.length; i++) {
  total = total + marks[i];
}
console.log("4. Total Marks:", total);

// 5. Calculate average marks
let average = total / marks.length;
console.log("5. Average Marks:", average.toFixed(2));

// 6 & 7. Find the highest and lowest marks
let highest = marks[0];
let lowest = marks[0];
for (let i = 1; i < marks.length; i++) {
  if (marks[i] > highest) {
    highest = marks[i];
  }
  if (marks[i] < lowest) {
    lowest = marks[i];
  }
}
console.log("6. Highest Mark:", highest);
console.log("7. Lowest Mark:", lowest);

// 8 & 9. Count and display students who passed (marks >= 40)
let passCount = 0;
let passedMarks = [];
for (let i = 0; i < marks.length; i++) {
  if (marks[i] >= 40) {
    passCount++;
    passedMarks.push(marks[i]);
  }
}
console.log("8. Number of Students Passed:", passCount);
console.log("9. Passed Students' Marks:");
for (let i = 0; i < marks.length; i++) {
  if (marks[i] >= 40) {
    console.log("   Student " + (i + 1) + ": " + marks[i]);
  }
}

// 10. Display the updated array
console.log("10. Updated Array:", marks);
