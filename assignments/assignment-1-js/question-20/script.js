/*

Question 20:

Find First Non-Repeating Character – Ask the user for a word
and find the first character that does not repeat. Example: hello
→ h (since e, l, and o repeat).

*/

let word = prompt("Enter A Word", "hello");

for (var i = 0; word[i]; i++) {
  for (var j = 0; word[j]; j++) {
    if (word[i] == word[j] && i != j) break;
  }

  if (word[j] == undefined) {
    document.write(
      `<h1>First Non-Repeating Character in ${word} = ${word[i]}</h1>`
    );
    break;
  }
}

if (word[i] == undefined)
  document.write(`<h1>There is no Non-Repeating Character in ${word}</h1>`);
