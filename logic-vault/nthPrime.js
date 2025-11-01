// Nth Prime

// A prime number is a positive integer
// greater than 1 that is divisible only
//  by 1 and itself. The first five prime
// numbers are 2, 3, 5, 7, and 11.

// Given a positive integer n, return the
// nth prime number. For example, given 5
// return the 5th prime number: 11.

//My solution :
function nthPrime(n) {
  let count2 = 0;
  let value = 2;

  while (count2 != n) {
    let count = 0;
    for (let i = 1; i <= value; i++) {
      if (value % i == 0) {
        count++;
      }
    }
    if (count === 2) {
      count2++;
    }

    if (count2 != n) {
      value++;
    }
  }

  return value;
}

console.log(nthPrime(1000));
