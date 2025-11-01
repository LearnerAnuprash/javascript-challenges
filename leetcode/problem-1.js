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
