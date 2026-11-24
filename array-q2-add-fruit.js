// Array Q2: Add a fruit entered by the user to the end of the array

let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log("Original Array:", fruits);

let newFruit = prompt("Enter a new fruit name:");

if (newFruit !== null && newFruit.trim() !== "") {
  fruits.push(newFruit.trim());
} else {
  console.log("No fruit entered. Array not changed.");
}

console.log("Updated Array:", fruits);
