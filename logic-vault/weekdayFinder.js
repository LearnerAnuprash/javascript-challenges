function month(m) {
  // Zeller’s month numbering
  if (m === 1) return 13; // January -> 13
  if (m === 2) return 14; // February -> 14
  return m; // march-december remains the same
}

function getWeekday(dateString) {
  let D = parseInt(dateString.slice(8, 10), 10); // day
  let m = parseInt(dateString.slice(5, 7), 10); // month
  let y = parseInt(dateString.slice(0, 4), 10); // full year

  // Adjust year for Jan/Feb (they belong to previous year)
  if (m === 1 || m === 2) {
    y -= 1;
  }

  let M = month(m);
  let Y = y % 100; // year within century
  let C = Math.floor(y / 100); // century

  // Zeller’s formula
  let formula =
    D +
    Math.floor((13 * (M + 1)) / 5) +
    Y +
    Math.floor(Y / 4) +
    Math.floor(C / 4) -
    2 * C;

  let remainder = ((formula % 7) + 7) % 7; // ensure positive

  const myMap = new Map([
    [0, "Saturday"],
    [1, "Sunday"],
    [2, "Monday"],
    [3, "Tuesday"],
    [4, "Wednesday"],
    [5, "Thursday"],
    [6, "Friday"],
  ]);

  return myMap.get(remainder);
}

console.log(getWeekday("2025-11-06")); // Thursday
console.log(getWeekday("1999-12-31")); // Friday
console.log(getWeekday("1111-11-11")); // Saturday
console.log(getWeekday("2112-12-21")); // Wednesday
console.log(getWeekday("2345-10-01")); // Monday
