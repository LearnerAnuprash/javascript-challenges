// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal

// consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

//My solution:

var lengthOfLastWord = function (s) {
  let result = s.trim();
  let duplicate = "";

  let l = result.length;

  if (result.split(/\s+/).length == 1) {
    return result.length;
  } else {
    while (result[l - 1] != " ") {
      duplicate += result[l - 1]; // storing in duplicate
      l--;
    }
    return duplicate.length;
  }
};

console.log(lengthOfLastWord("apple world"));
