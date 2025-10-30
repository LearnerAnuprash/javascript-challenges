// Email Sorter

// On October 29, 1971, the first email ever was sent, introducing the username@domain format we still use. Now, there are billions of email addresses.

// In this challenge, you are given a list of email addresses and need to sort them alphabetically by domain name first (the part after the @), and username second (the part before the @).

//     Sorting should be case-insensitive.
//     If more than one email has the same domain, sort them by their username.
//     Return an array of the sorted addresses.
//     Returned addresses should retain their original case.

// For example, given ["jill@mail.com", "john@example.com", "jane@example.com"], return ["jane@example.com", "john@example.com", "jill@mail.com"].

// My solution:
function sort(emails) {
  // the higher order function sort() takes a function as argument
  emails.sort((a, b) => {
    let [userA, domainA] = a.split("@"); // splitting the domain part and the username part of the email
    let [userB, domainB] = b.split("@"); // user A + domain A  = email a , userB + domainB = email b , and it shifts to right

    domainA = domainA.toLowerCase(); // Since , we need case-insensitive operation
    domainB = domainB.toLowerCase();
    userA = userA.toLowerCase();
    userB = userB.toLowerCase();

    if (domainA < domainB) return -1; // if a<b ( compares alphabetically ),
    //  a comes before b
    if (domainA > domainB) return 1; // if a>b , b comes before a

    if (userA < userB) return -1; // same for username and this only runs
    // when the domain for 2 values is equal
    if (userA > userB) return 1;

    return 0; // return 0 states that both the two elements have same
    // domain and username value so keep their order as it is
  });
  return emails; // returns the array of sorted strings
}

console.log(sort(["johndoe@gmail", "aradhana@example", "mintu@gmail"]));
