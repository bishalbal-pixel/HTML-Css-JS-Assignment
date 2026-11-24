// Object Q7: Display all property names and values using for...in

let product = {
  name: "Laptop",
  brand: "Dell",
  price: 80000,
  quantity: 5
};

for (let key in product) {
  console.log(key + ": " + product[key]);
}
