//Arrays in JavaScript

//Creating an array
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log('Initial array:', fruits);

//Accessing elements
console.log('First fruit:', fruits[0]);
console.log('Second fruit:', fruits[1]);
console.log('Third fruit:', fruits[2]);

//Adding elements
fruits.push('Date');
console.log('After adding Date:', fruits);
fruits.unshift('Elderberry');
console.log('After adding Elderberry at the beginning:', fruits);

//Removing elements
let removedFruit = fruits.pop();
console.log('After removing last fruit (', removedFruit, '):', fruits);
removedFruit = fruits.shift();
console.log('After removing first fruit (', removedFruit, '):', fruits);

//Finding the index of an element
let index = fruits.indexOf('Banana');
console.log('Index of Banana:', index);

//Checking if an element exists
let hasCherry = fruits.includes('Cherry');
console.log('Does the array include Cherry?', hasCherry);

//Iterating over an array
console.log('Iterating over fruits:');
fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});

