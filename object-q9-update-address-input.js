// Object Q9: Update the student's address with user input

let student = {
  name: "Ram",
  age: 20,
  section: "A",
  address: "Kathmandu"
};
console.log("Original Object:", student);

let newAddress = prompt("Enter the new address:");

if (newAddress !== null && newAddress.trim() !== "") {
  student.address = newAddress.trim();
} else {
  console.log("No address entered. Address not changed.");
}

console.log("Updated Object:", student);
