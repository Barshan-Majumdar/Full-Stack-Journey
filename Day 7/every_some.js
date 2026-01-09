const a = [1, 2, 3, 4, 5];
const allEvenA = a.every( n => n%2 == 0);
const someEvenA = a.some( n => n%2 == 0);
console.log(allEvenA); // false
console.log(someEvenA); // true

const b = [2, 4, 6, 8];
const allEvenB = b.every( n => n%2 == 0);
const someEvenB = b.some( n => n%2 == 0);
console.log(allEvenB); // true
console.log(someEvenB); // true