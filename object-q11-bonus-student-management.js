// Object Q11 (Bonus): Student Management System Using Objects

let student = {
  name: "Ram",
  rollNumber: 101,
  section: "A",
  age: 20,
  marks: 75,
  address: "Kathmandu"
};

// 1. Display all student details
console.log("1. Student Details:", student);

// 2. Add a phone number entered by the user
let phone = prompt("Enter the student's phone number:");
student.phone = phone !== null && phone.trim() !== "" ? phone.trim() : "Not provided";
console.log("2. After adding phone:", student);

// 3. Update the address using prompt()
let newAddress = prompt("Enter the new address:");
if (newAddress !== null && newAddress.trim() !== "") {
  student.address = newAddress.trim();
}
console.log("3. After updating address:", student);

// 4. Update the student's marks
student.marks = 82;
console.log("4. Updated Marks:", student.marks);

// 5. Check pass or fail (pass mark is 40)
if (student.marks >= 40) {
  console.log("5. Result: Passed");
} else {
  console.log("5. Result: Failed");
}

// 6. Add a new property called college
student.college = "Kathmandu College";
console.log("6. After adding college:", student);

// 7. Delete the age property
delete student.age;
console.log("7. After deleting age:", student);

// 8. Check whether rollNumber exists
if ("rollNumber" in student) {
  console.log("8. rollNumber property exists");
} else {
  console.log("8. rollNumber property does not exist");
}

// 9. Display all property names and values using a loop
console.log("9. All Properties:");
for (let key in student) {
  console.log("   " + key + ": " + student[key]);
}

// 10. Display the final updated object
console.log("10. Final Student Object:", student);
