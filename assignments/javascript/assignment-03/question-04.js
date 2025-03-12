/*

Question 04:

Create a nested loop to print following star pattern.

*
**
***
****
*****

*/

for (let i = 1; i <= 5; i++) {
  let stars = "";

  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}
