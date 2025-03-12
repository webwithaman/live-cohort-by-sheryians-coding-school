function checkEvenOrOdd(num) {
  // // Using Bitwise &
  // return num & 1 ? "Odd" : "Even";

  // // Using Arithmetic Modulus
  return num % 2 ? "Odd" : "Even";
}

module.exports = { checkEvenOrOdd };
