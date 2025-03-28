# DSA Assignment 3 (Mathematical Problems)

This repository contains solutions to various mathematical number problems, aimed at strengthening your understanding of important number concepts. The questions focus on topics like finding HCF, LCM, identifying perfect sqaures, Harshad numbers, neon numbers, and generating the Fibonacci series. Each problem has been solved using JavaScript, with the goal of helping you enhance your problem-solving skills and mathematical logic, particularly useful in technical interviews.

## Questions

1. **Question 01:**

```
Question 01: ISBN Number

Description: An ISBN (International Standard Book Number) is a unique 10-digit number assigned to books. The ISBN is valid if the sum of its digits, each multiplied by its position (1 to 10), is divisible by 11. (Validate Based on ISBN-10 Validation Rules)

Example:
Input: 020131452
Output: Invalid ISBN
Explanation: The sum of the digits multiplied by their positions is not divisible by 11.

Input: 0471958697
Output: Valid ISBN
Explanation: (0×1 + 4×2 + 7×3 + ... + 7×10) is divisible by 11.

Hint: Use a loop to multiply each digit by its respective position and check divisibility by 11.
```

2. **Question 02:**

```
Question 02: HCF/GCD

Description: The Highest Common Factor (HCF) or Greatest Common Divisor (GCD) of two numbers is the largest number that divides both numbers without leaving a remainder.

Example:
Input: a = 12, b = 18
Output: 6
Explanation: Factors of 12: {1,2,3,4,6,12}. Factors of 18: {1,2,3,6,9,18}. Common factors: {1,2,3,6}. The highest is 6.

Hint: Use the Euclidean algorithm: GCD(a, b) = GCD(b, a % b).
```

3. **Question 03:**

```
Question 03: Harshad Number

Description: A number is a Harshad number if it is divisible by the sum of its digits.

Example:
Input: 18
Output: Harshad Number
Explanation: Sum of digits (1 + 8) = 9, and 18 is divisible by 9.

Hint: Extract digits using modulo (%) and integer division (//).
```

4. **Question 04:**

```
Question 04: Perfect Square

Description: A number is a perfect square if it is the square of an integer.

Example:
Input: 25
Output: Perfect Square
Explanation: 5 x 5 = 25.

Hint: Use sqrt(N), check if it’s an integer.
```

5. **Question 05:**

```
Question 05: Abundant Number

Description: A number is called abundant if the sum of its proper divisors (excluding the number itself) is greater than the number.

Example:
Input: 12
Output: Abundant Number
Explanation: Proper divisors: 1, 2, 3, 4, 6 → Sum = 16 (greater than 12).

Hint: Use a loop to find proper divisors.
```

6. **Question 06:**

```
Question 06: Fibonacci Series using Loop

Description: Print Fibonacci series up to N terms using a loop.

Example:
Input: N = 6
Output: 0, 1, 1, 2, 3, 5

Hint: Use a loop and store previous two numbers.
```

7. **Question 07:**

```
Question 07: Find First N Numbers with Exactly X Divisors

Description: Find First N Numbers that have exactly X divisors.

Example:
Input: X = 3
Output: 4, 9, 25, 49
Explanation: These numbers have exactly three divisors.

Hint: Use prime factorization.
```

8. **Question 08:**

```
Question 08: Prime Factors

Description: Find all prime factors of a number.

Example:
Input: 30
Output: 2, 3, 5

Hint: Use division method.
```

9. **Question 09:**

```
Question 09: Calculate Area using Switch Statement

Description: Find the area of a circle, rectangle, or triangle.

Example:
Input: Choice = Circle, Radius = 5
Output: Area = 78.5

Hint: Use switch with case statements.
```

10. **Question 10:**

```
Question 10: Neon Number

Description: A number where the sum of digits of its square equals the number itself.

Example:
Input: 9
Output: Neon Number
Explanation: 9² = 81, sum of digits = 9.

Hint: Find square, sum digits, compare.
```

11. **Question 11:**

```
Question 11: Sum of Even Indexed Fibonacci Numbers

Description: Find the sum of Fibonacci numbers at even indices up to the Nth Fibonacci number.

Example:
Input: N = 4
Output: 33

Hint: Use a loop and maintain a sum for even-indexed elements.
```

12. **Question 12:**

```
Question 12: Find the Largest Digit in a Number

Description: Find the largest digit in a given number.

Example:
Input: 54829
Output: 9

Hint: Extract digits using modulo (% 10) and compare.
```

13. **Question 13:**

```
Question 13: Find LCM of Two Numbers

Description: Find the Least Common Multiple (LCM) of two numbers.

Example:
Input: a = 12, b = 15
Output: 60

Hint: LCM can be found using the formula: LCM(a, b) = (a × b) / GCD(a, b).
```

14. **Question 14:**

```
Question 14: Find the Sum of Even Digits in a Number

Description: Find the sum of all even digits in a given number.

Example:
Input: 2384
Output: 14

Hint: Extract digits using % 10, check if even (digit % 2 == 0), add to sum.
```

15. **Question 15:**

```
Question 15: Number of Days in a Month

Description: Find the number of days in a given month and year (to handle leap years).

Example:
Input: Month = 2, Year = 2024
Output: 29

Hint: Use conditions/switch:
```

## How to Use

3. Clone or download the repository to practice and run the solutions locally.

## Contribution

Feel free to open an issue if you find any bugs or improvements in the solutions.
