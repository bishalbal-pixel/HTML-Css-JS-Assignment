// Q7 - largest of two numbers
function findLargest(a, b) {
  if (a > b) {
    console.log("Largest Number: " + a);
  } else if (b > a) {
    console.log("Largest Number: " + b);
  } else {
    console.log("Both numbers are equal.");
  }
}

findLargest(25, 40);
