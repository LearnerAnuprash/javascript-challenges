/*
Fingerprint Test

Given two strings representing fingerprints, determine if they are a match:

Rules:
- Each fingerprint consists only of lowercase letters (a–z).
- Two fingerprints match if:
  1. They are the same length.
  2. The number of differing characters does not exceed 10% of the length.

Tests:
1. isMatch("helloworld", "helloworld") → true
2. isMatch("helloworld", "helloworlds") → false
3. isMatch("helloworld", "jelloworld") → true
4. isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthelazydog") → true
5. isMatch("theslickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazydog") → true
6. isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazycat") → false
*/

function isMatch(a, b) {
  if (a.length !== b.length) return false;

  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) diff++;
  }

  return diff <= a.length * 0.1;
}
