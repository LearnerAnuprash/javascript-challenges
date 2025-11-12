// 🧩 Problem: Vowels and Consonants
// Given a string, return an array with the number of vowels and consonants in the string.
//
// - Vowels: a, e, i, o, u (in any case)
// - Consonants: all other letters (in any case)
// - Ignore any non-letter characters
//
// Example:
// "Hello World" → [3, 7]

//My Solution:

function count(str) {
  let vowelCount = 0;
  let consonantCount = 0;

  for (let letter of str) {
    if (
      letter.toLowerCase() === "a" ||
      letter.toLowerCase() === "e" ||
      letter.toLowerCase() === "i" ||
      letter.toLowerCase() === "o" ||
      letter.toLowerCase() === "u"
    ) {
      vowelCount++;
    } else if (/[a-zA-Z]/.test(letter)) {
      consonantCount++;
    }
  }

  return [vowelCount, consonantCount];
}
