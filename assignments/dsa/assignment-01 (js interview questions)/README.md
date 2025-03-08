# DSA Assignment 1 (JS Interview Questions)

This repository contains solutions to **JavaScript interview questions**, specifically designed to strengthen your understanding of JavaScript programming fundamentals. The questions focus on key concepts such as increment and decrement operators, as well as algorithms to analyze code, identify errors, and determine the correct output. Each problem has been solved using JavaScript, with the goal of helping you improve your ability to write efficient and accurate JavaScript code, especially in the context of technical interviews.

Each question is solved in its respective folder, but for convenience, the questions are listed below.

## Questions

1. **Question 01:**

```
// Find Output of the Following Code:

let i = 11;
i = i++ + ++i;
console.log(i);
```

2. **Question 02:**

```
// Find Output of the Following Code:

let a = 11,
  b = 22,
  c;
c = a + b + a++ + b++ + ++a + ++b;
console.log("a=" + a);
console.log("b=" + b);
console.log("c=" + c);
```

3. **Question 03:**

```
// Find Output of the Following Code:

let i = 0;
i = i++ + --i + ++i - i--;
console.log(i);
```

4. **Question 04:**

```
// Find Output of the Following Code:

let b = true;
b++;
console.log(b);
```

5. **Question 05:**

```
// Find Output of the Following Code:

let i = 1,
  j = 2,
  k = 3;
let m = i-- - j-- - k--;
console.log("i=" + i);
console.log("j=" + j);
console.log("k=" + k);
console.log("m=" + m);
```

6. **Question 06:**

```
// Find Output of the Following Code:

let a = 1,
  b = 2;
console.log(-b + ++a + ++b - -a);
```

7. **Question 07:**

```
// Find Output of the Following Code:

let i = 19,
  j = 29,
  k;
k = i-- - i++ + --j - ++j + --i - j-- + ++i - j++;
console.log("i=" + i);
console.log("j=" + j);
console.log("k=" + k);
```

8. **Question 08:**

```
Find any Syntax Error or Logical Issue in the following Code:

let i = 11;
let j = --(i++);
```

9. **Question 09:**

```
// Find Output of the Following Code:

let m = 0,
  n = 0;
let p = --m * --n * n-- * m--;
console.log(p);

```

10. **Question 10:**

```
// Find Output of the Following Code:

let a = 1;
a = a++ + ++a * --a - a--;
console.log(a);
```

11. **Question 11:**

```
Find any Syntax Error or Logical Issue in the following Code:

let a = 11++;
console.log(a);
```

12. **Question 12:**

```
// Find Output of the Following Code:

let i = 0,
  j = 0;

console.log(--i * i++ * ++j * j++);
```

## How to Use

1. Each question has its own folder (`question-01`, `question-02`, etc.).
2. Navigate to the respective folder to see the solution code for each question.
3. Clone or download the repository to practice and run the solutions locally.

## Contribution

Feel free to open an issue if you find any bugs or improvements in the solutions.
