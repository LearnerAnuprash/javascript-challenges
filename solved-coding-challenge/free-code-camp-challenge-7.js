// SpOoKy~CaSe

// Given a string representing a variable name, convert it to "spooky case" using the following constraints:

//     Replace all underscores (_), and hyphens (-) with a tilde (~).
//     Capitalize the first letter of the string, and every other letter after that. Ignore the tilde character when counting. Make all other letters lowercase.

// For example, given hello_world, return HeLlO~wOrLd.

//My solution:

function iChecker(boo, i) {
  if (/[a-zA-Z]/.test(boo[i])) {
    return boo[i];
  } else {
    if (boo[i] === "-" || boo[i] === "_") {
      return "~";
    }

    return iChecker(boo, i - 1);
  }
}

function spookify(boo) {
  duplicate = ""; // This string stores the duplicated string
  let count = 0; // Initialized count which increments on alphabets only

  for (let i = 0; i < boo.length; i++) {
    const ch = iChecker(boo, i);

    if (/[a-zA-Z]/.test(ch)) {
      // For alphabets
      duplicate += count % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase();
      count++;
    } else {
      // For other characters i.e. "-" / "_"
      duplicate += ch;
    }
  }

  return duplicate;
}

boo = "c-a-n-d-y-b-o_w-l"; // Any string

console.log(spookify(boo));
