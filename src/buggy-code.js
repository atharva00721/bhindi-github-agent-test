// Fixed code with bug corrections

function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {  // FIXED: Changed <= to <
    total += items[i].price;
  }
  return total;
}

function divideNumbers(a, b) {
  if (b === 0) {  // FIXED: Added zero division check
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

function getUserData(userId) {
  const users = {
    1: { name: "Alice" },
    2: { name: "Bob" }
  };
  
  // FIXED: Added null check
  if (!users[userId]) {
    throw new Error(`User with ID ${userId} not found`);
  }
  
  return users[userId].name;
}

module.exports = { calculateTotal, divideNumbers, getUserData };