/*

Question 2:

Write a program to accept the rating of the movie as a double and the movie name as a String. Check and print the category of the movie based on the rating.

Rating Message to be displayed
0.0 to 2.0 Flop
2.1 to 3.4 Semi-hit
3.5 to 4.5 Hit
4.6 to 5.0 Super Hit

Example:

INPUT:
Movie name: RRR
Ratign: 4.9

Output:
RRR is a Super Hit.

*/

let movieName = prompt("Enter a Movie Name", "Pushpa 2"),
  rating = parseFloat(prompt("Enter the Rating of this Movie (0-5)", 4.3));

if (Number.isNaN(rating) || !movieName || rating < 0 || rating > 5)
  console.log("Invalid Input!!!");
else {
  let tag = "Flop";

  if (rating >= 4.6) tag = "Super Hit";
  else if (rating >= 3.5) tag = "Hit";
  else if (rating >= 2.1) tag = "Semi Hit";

  document.writeln(`<h2>${movieName} is a ${tag}</h2>`);
}
