// DOM Q5: Simple counter with increment, decrement and reset

let count = 0;

function updateDisplay() {
  document.getElementById("count").textContent = count;
}

function increment() {
  count++;
  updateDisplay();
}

function decrement() {
  count--;
  updateDisplay();
}

function reset() {
  count = 0;
  updateDisplay();
}
