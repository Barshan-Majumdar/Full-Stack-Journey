//string methods
let greeting = "  Hello, World!  ";

//replace
let newGreeting = greeting.replace("World", "JavaScript");//does not change original string
console.log(newGreeting); // "  Hello, JavaScript!  "
console.log(greeting); // "  Hello, World!  "

//replaceAll
let text = "apple banana apple grape apple";
let newText = text.replaceAll("apple", "orange");
console.log(newText); // "orange banana orange grape orange"

//split
let fruits = "apple,banana,grape,orange";
let fruitArray = fruits.split(",");
console.log(fruitArray); // ["apple", "banana", "grape", "orange"]

//repeat
let laugh = "ha";
let repeatedLaugh = laugh.repeat(3);
console.log(repeatedLaugh); // "hahaha"

//trim
let trimmedGreeting = greeting.trim();
console.log(trimmedGreeting); // "Hello, World!"

//trimStart
let trimmedStartGreeting = greeting.trimStart();
console.log(trimmedStartGreeting); // "Hello, World!  "

//trimEnd
let trimmedEndGreeting = greeting.trimEnd();
console.log(trimmedEndGreeting); // "  Hello, World!"

//concat
let str1 = "Hello";
let str2 = "World";
let concatenatedString = str1.concat(", ", str2, "!");
console.log(concatenatedString); // "Hello, World!"

//charAt
let char = greeting.charAt(7);
console.log(char); // "W"

//at
let atChar = greeting.at(7);
console.log(atChar); // "W"

//charAt cant use negative index but at can

//charCodeAt
let charCode = greeting.charCodeAt(7);
console.log(charCode); // 87 (Unicode of 'W')

//slice
let slicedString = greeting.slice(2, 7);
console.log(slicedString); // "Hello"

//substring
let substring = greeting.substring(2, 7);
console.log(substring); // "Hello"

//substr
let substr = greeting.substr(2, 5);
console.log(substr); // "Hello"

//toUpperCase
let upperCaseGreeting = greeting.toUpperCase();
console.log(upperCaseGreeting); // "  HELLO, WORLD!  "

//toLowerCase
let lowerCaseGreeting = greeting.toLowerCase();
console.log(lowerCaseGreeting); // "  hello, world!  "

//includes
let hasWorld = greeting.includes("World");
console.log(hasWorld); // true

