// Object Q8: Calculate the total price of products in the shopping cart

let shoppingCart = {
  laptop: 80000,
  mouse: 1500,
  keyboard: 2500,
  headphones: 3000
};

let total = 0;

for (let item in shoppingCart) {
  total = total + shoppingCart[item];
}

console.log("Total Price:", total);
