// Word Counter

// Given a sentence string, return the number of words that are in the sentence.

//     Words are any sequence of non-space characters and are separated by a single space.

//My solution:

function countWords(sentence) {
  let count = 1;
  let sentenceT = sentence.trim();
  for (let s of sentenceT) {
    if (s == " ") {
      count++;
    }
  }

  return count;
}
