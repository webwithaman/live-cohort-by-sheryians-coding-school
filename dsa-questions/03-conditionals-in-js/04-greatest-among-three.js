function findGreatest(a, b, c) {
  // // Using Logical &&
  //   if (a > b && a > c) return a;
  //   else if (b > c) return b;
  //   else return c;

  // // Using Nested If-Else
  //   if (a > b) {
  //     if (a > c) return a;
  //     else return c;
  //   } else if (b > c) return b;
  //   else return c;

  // // Using Conditional Operator (Ternary Operator)
  return a > b ? (a > c ? a : c) : b > c ? b : c;
}

module.exports = { findGreatest };
