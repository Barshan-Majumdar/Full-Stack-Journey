//string template or template literals

let firstName = "Barshan";
let lastName = "Majumdar";
//using backticks and ${} for variable interpolation
let fullName = `${firstName} ${lastName}`;
console.log(fullName); // "Barshan Majumdar"

//multi-line string using template literals
let multiLineString = `This is a multi-line string.
It can span multiple lines.
Using backticks.`;
console.log(multiLineString);
// This is a multi-line string.
// It can span multiple lines.
// Using backticks.

//Embedding expressions
let a = 5;
let b = 10;
let sumString = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(sumString); // "The sum of 5 and 10 is 15."

//Using functions inside template literals
function toUpperCase(str) {
    return str.toUpperCase();
}
let greeting = `Hello, ${toUpperCase(firstName)}!`;
console.log(greeting); // "Hello, BARSHAN!"

