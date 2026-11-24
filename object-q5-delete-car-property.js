// Object Q5: Delete the color property from a car object

let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  color: "White"
};
console.log("Original Object:", car);

delete car.color;

console.log("Updated Object:", car);
