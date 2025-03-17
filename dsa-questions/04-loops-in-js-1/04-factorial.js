function factorial(n) {
  let fact = 1;
  while (n > 1) fact *= n--;
  return fact;
}

module.exports = { factorial };
