function isLeapYear(year) {
  // // Using If-Else
  //   if (!(year % 400) || (year % 4 == 0 && year % 100 != 0)) return "Leap Year";
  //   return "Not a Leap Year";

  // // Using Conditional Operator (Ternary Operator)
  return !(year % 400) || (year % 4 == 0 && year % 100 != 0)
    ? "Leap Year"
    : "Not a Leap Year";
}

module.exports = { isLeapYear };
