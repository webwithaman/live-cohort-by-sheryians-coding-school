function calculateFinalAmount(amount) {
  let discountPer = 0;

  if (amount >= 5001 && amount <= 7000) discountPer = 5;
  else if (amount >= 7001 && amount <= 9000) discountPer = 10;
  else if (amount >= 9001) discountPer = 20;

  return amount - (discountPer / 100) * amount;
}

module.exports = { calculateFinalAmount };
