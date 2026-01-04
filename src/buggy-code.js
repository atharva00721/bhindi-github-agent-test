// Intentionally buggy code for testing

function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i <= items.length; i++) {  // BUG: Off-by-one error
    total += items[i].price;
  }
  return total;
}

function divideNumbers(a, b) {
  return a / b;  // BUG: No zero division check
}

function getUserData(userId) {
  const users = {
    1: { name: "Alice" },
    2: { name: "Bob" }
  };
  return users[userId].name;  // BUG: No null check
}

module.exports = { calculateTotal, divideNumbers, getUserData };