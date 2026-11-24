// Function Q8: Calculate the sum of array elements using a function

function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

let numbers = [10, 20, 30, 40, 50];
let result = calculateSum(numbers);
console.log("Total Sum:", result);
