// sort() = method used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic order,
//          not alphabetical :
//  lexicographic=(alphabet+numbers+symbols) as strings

//? To sort strings, it works like :

let fruits = ["apple", "watermelon", "orange", "pineapple", "jackfruit"];

fruits.sort();

// console.log(fruits);

//? When sorting numbers , we encounter this problem:

let numbers = [1, 9, 2, 5, 7, 6, 3, 4, 8, 10, 11]; // Sorting issue
// numbers.sort();
// console.log(numbers);

//Solution to this issue:

//TODO sorting in ascending order:
numbers.sort((a, b) => a - b);

//TODO sorting in descending order:
numbers.sort((a, b) => b - a);

//? Console.log()
// console.log(numbers);

// * =========================================================== * //

const people = [
  { name: "Patrick", age: 29, gpa: 3.0 },
  { name: "Johnson", age: 19, gpa: 2.0 },
  { name: "Nilam", age: 50, gpa: 4.0 },
  { name: "Emily", age: 44, gpa: 2.8 },
];

people.sort((a, b) => a.age - b.age);

//TODO => For sorting on the basis of alphabetical order i.e. name
//TODO    (there is a different formula )

people.sort((a, b) => a.name.localeCompare(b.name)); // Sorting on the basis of name

// console.log(numbers);

