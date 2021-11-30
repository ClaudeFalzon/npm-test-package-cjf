

function sum(a, b) {
  console.log(`sum of these two numbers is: ${a + b}`);
}

module.exports = sum;

function multiply(a, b) {
  console.log(`multiplication of these two numbers is: ${a * b}`);
}

module.exports = {sum, multiply};