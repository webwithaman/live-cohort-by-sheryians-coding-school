/*

Question 23:

Toggle Case – Ask the user for a word and toggle the case of
every character. Example: HeLLo → hEllO.  

*/

let word = prompt("Enter A Word", "hello");
let wordAfterToggleCase = word;

for (let i = 0; wordAfterToggleCase[i]; i++) {
  if (wordAfterToggleCase[i] >= "a" && wordAfterToggleCase[i] <= "z")
    wordAfterToggleCase = `${wordAfterToggleCase.slice(
      0,
      i
    )}${String.fromCharCode(
      wordAfterToggleCase.charCodeAt(i) - 32
    )}${wordAfterToggleCase.slice(i + 1)}`;
  else if (wordAfterToggleCase[i] >= "A" && wordAfterToggleCase[i] <= "Z")
    wordAfterToggleCase = `${wordAfterToggleCase.slice(
      0,
      i
    )}${String.fromCharCode(
      wordAfterToggleCase.charCodeAt(i) + 32
    )}${wordAfterToggleCase.slice(i + 1)}`;
}

document.write(
  `<h1>${word} After Toggling Case of Every Character = ${wordAfterToggleCase}</h1>`
);
