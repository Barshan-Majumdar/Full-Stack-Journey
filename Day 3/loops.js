//Loops in JavaScript

//For Loop
for (let i = 1; i <= 5; i++) {
    console.log("Iteration " + i);
}

//While Loop
let j = 1; 
while (j <= 5) {
    console.log("Count " + j);
    j++;
}

//Do-While Loop
let k = 1;
do {
    console.log("Number " + k);
    k++;
}
while (k <= 5);

//For...In Loop
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
for (let key in person) {
    console.log(key + ": " + person[key]);
}

//For...Of Loop
const colors = ["Red", "Green", "Blue"];
for (let color of colors) {
    console.log(color);
}

//Nested Loop
for (let m = 1; m <= 3; m++) {
    for (let n = 1; n <= 2; n++) {
        console.log("m: " + m + ", n: " + n);
    }
}

//Break and Continue
for (let p = 1; p <= 10; p++) {
    if (p === 6) { 
        break; // Exit loop when p is 6
    }
    if (p % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log("Odd Number: " + p);
}

