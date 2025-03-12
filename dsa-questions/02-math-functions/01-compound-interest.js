function calculateCompoundInterest(P, r, t, n) {
  return (P * Math.pow(1 + r / n, n * t) - P).toFixed(2);
}

module.exports = { calculateCompoundInterest };
