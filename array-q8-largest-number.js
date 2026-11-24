// Array Q8: Find the largest number in an array of 7 numbers

let numbers = [12, 45, 7, 89, 23, 56, 10];

// Assume the first element is the largest
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

console.log("Largest Number:", largest);
