function sumUpToN(n) {
  // // Using Loop
  // let sum=n;
  // while(--n)
  //     sum+=n;
  // return sum;

  // // Using Formula
  return (n * (n + 1)) / 2;
}

module.exports = { sumUpToN };
