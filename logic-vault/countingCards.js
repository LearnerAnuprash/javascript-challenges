// ===========================
// Counting Cards
// ===========================
// A standard deck of playing cards has 13 unique cards in each suit.
// Given an integer representing the number of cards to pick from the deck,
// return the number of unique combinations of cards you can pick.
//
// Order does not matter. Picking card A then card B is the same as picking card B then card A.
//
// Examples:
// combinations(52) => 1
// combinations(2)  => 1326
// combinations(5)  => 2598960
// combinations(50) => 1326

//My solution:

function factorial(num) {
  let mul = 1;
  while (num > 0) {
    mul = mul * num;
    num--;
  }
  return mul;
}

function combinations(cards) {
  return Math.round(factorial(52) / (factorial(52 - cards) * factorial(cards)));
}

console.log(combinations(2));
