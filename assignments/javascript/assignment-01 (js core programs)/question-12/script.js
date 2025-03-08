/*

Question 12:

Simple Login System – Set a predefined username and
password. Ask the user to enter their credentials using
prompt(). If correct, print “Login Successful”; otherwise, print
“.” 

*/

let savedUserName = "webwithaman",
  savedPassword = "@webwithaman***";

let userName = prompt("Enter this Username (webwithaman)");
let userPassword = prompt("Enter this Password (@webwithaman***)");

if (savedUserName == userName && savedPassword == userPassword)
  document.write(`<h1>Login Successful</h1>`);
else document.write(`<h1>Incorrect Username or Password</h1>`);
