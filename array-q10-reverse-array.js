// Array Q10: Reverse the order of elements in an array

let numbers = [10, 20, 30, 40, 50];
console.log("Original Array:", numbers);

// Method 1: using a loop (additional challenge)
let reversedWithLoop = [];
for (let i = numbers.length - 1; i >= 0; i--) {
  reversedWithLoop.push(numbers[i]);
}
console.log("Reversed (using loop):", reversedWithLoop);

// Method 2: using the built-in reverse() method
// A copy is made with slice() so the original array stays unchanged for the loop above
let reversedBuiltIn = numbers.slice().reverse();
console.log("Reversed (using reverse()):", reversedBuiltIn);
