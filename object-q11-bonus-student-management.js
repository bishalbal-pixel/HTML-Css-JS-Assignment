// Q11 - student management (bonus)
let student = {
  name: "Ram",
  rollNumber: 101,
  section: "A",
  age: 20,
  marks: 75,
  address: "Kathmandu"
};

// show details
console.log(student);

// add phone number
student.phone = prompt("Enter phone number");

// update address
student.address = prompt("Enter new address");

// update marks
student.marks = 80;

// pass or fail
if (student.marks >= 40) {
  console.log("Passed");
} else {
  console.log("Failed");
}

// add college
student.college = "Kathmandu College";

// delete age
delete student.age;

// check roll number
if ("rollNumber" in student) {
  console.log("rollNumber exists");
} else {
  console.log("rollNumber does not exist");
}

// show all properties
for (let key in student) {
  console.log(key + ": " + student[key]);
}

// final object
console.log(student);
