const cartItems = [
  { name: "Shoes", quantity: 2, price: 75 },
  { name: "Hat", price: 20 },
  { name: "Socks", quantity: 3 },
];

cartItems.forEach((item) => {
  const { name, quantity = 1, price = 10 } = item;

  const totalCost = quantity * price;

  console.log(`Total cost for ${name}: $${totalCost}`);
});
