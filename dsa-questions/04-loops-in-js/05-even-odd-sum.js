function sumEvenOddInRange(start, end) {
  // // Using Formulas & Functions

  // // Swap if start is greater than End
  // if (start > end) [start, end] = [end, start];

  // // Function to Calculate Sum of First N Terms
  // const sumFormula = (n) => (n * (n + 1)) / 2;

  // // Total sum of numbers between start and end
  // let totalSum = sumFormula(end) - sumFormula(start - 1);

  // // Sum of even numbers
  // let evenSum =
  //   sumFormula(Math.floor(end / 2)) * 2 -
  //   sumFormula(Math.floor((start - 1) / 2)) * 2;

  // // Sum of odd numbers
  // let oddSum = totalSum - evenSum;

  // return [evenSum, oddSum];

  // // Using Loop
  // // Swap if Start Greater than End
  if (start > end) start = start + end - (end = start);

  let evenSum = 0,
    oddSum = 0;

  while (start <= end) {
    start % 2 ? (oddSum += start++) : (evenSum += start++);
  }

  return [evenSum, oddSum];
}

module.exports = { sumEvenOddInRange };
