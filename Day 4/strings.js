let firstName = "Barshan";
let lastName = "Majumdar";
let fullName = firstName + " " + lastName;
console.log(fullName);// Barshan Majumdar

let sentence = 'I\'m Barshan, a ML Engineer and frontend dev.';// Using escape character
console.log(sentence);// I'm Barshan, a ML Engineer and frontend dev.

let multiLineString = `This is a multi-line string.
It can span multiple lines.
Using backticks.`;
console.log(multiLineString);// This is a multi-line string.

//length of string
console.log(fullName.length); // 16

//String type
let name = "Barshan";
console.log(typeof name); // string
//Objcect type
let nameObj = new String("Barshan");
console.log(typeof nameObj); // object
console.log(name == nameObj); // true
console.log(name === nameObj); // false


//Avoid using string objects cause those are slower and cant match their value with each other along with thier type
let nameObj1 = new String("Barshan");
let nameObj2 = new String("Barshan");
console.log(nameObj1 === nameObj2);// false
console.log(nameObj1 == nameObj2);// false