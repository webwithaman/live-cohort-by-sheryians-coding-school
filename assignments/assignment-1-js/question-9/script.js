/*

Question 9:

Traffic Light System – Ask the user for a traffic light color (red,
yellow, green). Print appropriate messages:

Red: "Stop!"
Yellow: "Get Ready!"
Green: "Go!" 

*/

let trafficLightColor = prompt(
  "Enter A Traffic Light Color (red,yellow,green)",
  "red"
);

if (trafficLightColor.toLowerCase() == "red") document.write("<h1>Stop!</h1>");
else if (trafficLightColor.toLowerCase() == "yellow")
  document.write("<h1>Get Ready!</h1>");
else if (trafficLightColor.toLowerCase() == "green")
  document.write("<h1>Go!</h1>");
else document.write("<h1>Invalid Input!!!</h1>");
