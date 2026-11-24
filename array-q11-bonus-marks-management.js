// Q11 - student marks management (bonus)
let marks = [75, 45, 90, 32, 60];

// show all marks
for (let i = 0; i < marks.length; i++) {
  console.log("Student " + (i + 1) + ": " + marks[i]);
}

// add new mark
marks.push(85);
console.log(marks);

// remove last mark
marks.pop();
console.log(marks);

// total
let total = 0;
for (let i = 0; i < marks.length; i++) {
  total = total + marks[i];
}
console.log("Total: " + total);

// average
let average = total / marks.length;
console.log("Average: " + average);

// highest and lowest
let highest = marks[0];
let lowest = marks[0];
for (let i = 0; i < marks.length; i++) {
  if (marks[i] > highest) {
    highest = marks[i];
  }
  if (marks[i] < lowest) {
    lowest = marks[i];
  }
}
console.log("Highest: " + highest);
console.log("Lowest: " + lowest);

// passed students
let count = 0;
console.log("Passed students marks:");
for (let i = 0; i < marks.length; i++) {
  if (marks[i] >= 40) {
    count++;
    console.log(marks[i]);
  }
}
console.log("Total passed: " + count);

// updated array
console.log(marks);
