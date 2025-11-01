/* Speak Wisely, You Must

Given a sentence, return a version of it that sounds like advice from a wise teacher using the following rules:

    Words are separated by a single space.
    Find the first occurrence of one of the following words in the sentence: "have", "must", "are", "will", "can".
    Move all words before and including that word to the end of the sentence and:
        Preserve the order of the words when you move them.
        Make them all lowercase.
        And add a comma and space before them.
    Capitalize the first letter of the new first word of the sentence.
    All given sentences will end with a single punctuation mark. Keep the original punctuation of the sentence and move it to the end of the new sentence.
    Return the new sentence, make sure there's a single space between each word and no spaces at the beginning or end of the sentence.

For example, given "You must speak wisely." return "Speak wisely, you must."
*/

//My solution

function wiseSpeak(sentence) {
  let index;

  const punctuation = sentence[sentence.length - 1];
  // Stores the punctuation after the sentence ends

  const word = ["have", "must", "will", "can", "are"];
  console.log("Provided sentence is : " + sentence);

  for (let i = 0; i < word.length; i++) {
    if (sentence.search(word[i]) != -1 && word[i].length == 4) {
      //For 4 letter test cases
      index = sentence.search(word[i]);
      let firstPart = sentence.slice(index + 5, sentence.length - 1) + ", ";
      firstPart =
        firstPart[0].toUpperCase() + firstPart.slice(1, firstPart.length);
      let secondPart = sentence.slice(0, index + 4);
      secondPart = secondPart.toLowerCase();
      let fullPart = firstPart + secondPart + punctuation;
      return fullPart;
    } else if (sentence.search(word[i]) != -1 && word[i].length == 3) {
      //For 3 letter test cases
      index = sentence.search(word[i]);
      let firstPart = sentence.slice(index + 4, sentence.length - 1) + ", ";
      firstPart =
        firstPart[0].toUpperCase() + firstPart.slice(1, firstPart.length);
      let secondPart = sentence.slice(0, index + 3);
      secondPart = secondPart.toLowerCase();
      let fullPart = firstPart + secondPart + punctuation;
      return fullPart;
    }
  }
}

console.log(wiseSpeak("You must speak wisely."));
