// Complementary DNA

// Given a string representing a DNA sequence, return its complementary strand using the following rules:

//     DNA consists of the letters "A", "C", "G", and "T".
//     The letters "A" and "T" complement each other.
//     The letters "C" and "G" complement each other.

// For example, given "ACGT", return "TGCA".

//My Solution :

//Complementary strand :
// A = T
// C = G

function complementaryDNA(strand) {
  let resultStr = "";

  for (let i = 0; i < strand.length; i++) {
    switch (strand[i]) {
      case "A":
        resultStr += "T";
        break;

      case "C":
        resultStr += "G";
        break;

      case "G":
        resultStr += "C";
        break;

      case "T":
        resultStr += "A";
        break;

      default:
        console.log("Wrong input detected!");
    }
  }

  return resultStr;
}

console.log(complementaryDNA("TGCAGA"));
