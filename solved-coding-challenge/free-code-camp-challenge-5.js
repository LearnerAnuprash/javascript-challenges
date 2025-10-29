// function sort(emails) {

//   return emails;
// }

let emails = ["jehndoe@gmail", "johndoe@example", "aaradhana@gmail"];
emails.sort();
let domains = [];
let usernames = [];

for (let email of emails) {
  let index = email.indexOf("@");
  domains.push(email.slice(index + 1));
  usernames.push(email.slice(0, index));
}

domains.sort();
usernames.sort();

console.log(domains);
console.log(emails);
