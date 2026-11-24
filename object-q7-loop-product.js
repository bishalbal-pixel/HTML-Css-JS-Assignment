// Q7 - loop through object
let product = {
  name: "Laptop",
  brand: "Dell",
  price: 80000,
  quantity: 5
};

for (let key in product) {
  console.log(key + ": " + product[key]);
}
