// Q10 - reverse array
let numbers = [10, 20, 30, 40, 50];

// using loop
let reversed = [];
for (let i = numbers.length - 1; i >= 0; i--) {
  reversed.push(numbers[i]);
}
console.log(reversed);

// using reverse()
numbers.reverse();
console.log(numbers);
