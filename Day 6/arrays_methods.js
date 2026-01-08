//arrays methods

let fruits = ['apple', 'banana', 'cherry'];

// 1. push() - adds an element to the end of the array
fruits.push('date');
console.log(fruits); // ['apple', 'banana', 'cherry', 'date']

// 2. pop() - removes the last element from the array
let lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits); // ['apple', 'banana', 'cherry']

// 3. unshift() - adds an element to the beginning of the array
fruits.unshift('avocado');
console.log(fruits); // ['avocado', 'apple', 'banana', 'cherry']

// 4. shift() - removes the first element from the array
let firstFruit = fruits.shift();
console.log(firstFruit);
console.log(fruits); // ['apple', 'banana', 'cherry']

// 5. indexOf() - returns the index of the first occurrence of an element
let index = fruits.indexOf('banana');
console.log(index); // 1

// 6. splice() - adds/removes elements from the array
fruits.splice(1, 1, 'blueberry', 'blackberry'); // removes 1 element at index 1 and adds 2 new elements
console.log(fruits); // ['apple', 'blueberry', 'blackberry', 'cherry']

// 7. slice() - returns a shallow copy of a portion of the array
let citrusFruits = fruits.slice(1, 3);
console.log(citrusFruits); // ['blueberry', 'blackberry']

// 8. forEach() - executes a provided function once for each array element
fruits.forEach(function(fruit, index) {
    console.log(index + ': ' + fruit);
});
// 0: apple
// 1: blueberry
// 2: blackberry
// 3: cherry

//9. toString() - converts the array to a string
let fruitsString = fruits.toString();
console.log(fruitsString); // 'apple,blueberry,blackberry,cherry'

//10. join() - joins all elements of the array into a string with a specified separator
let joinedFruits = fruits.join(' - ');
console.log(joinedFruits); // 'apple - blueberry - blackberry - cherry'

//11. sort() - sorts the elements of the array
fruits.sort();
console.log(fruits); // ['apple', 'blackberry', 'blueberry', 'cherry']

//12. reverse() - reverses the order of the elements in the array
fruits.reverse();
console.log(fruits); // ['cherry', 'blueberry', 'blackberry', 'apple']

//13. concat() - merges two or more arrays
let tropicalFruits = ['mango', 'pineapple'];
let allFruits = fruits.concat(tropicalFruits);
console.log(allFruits); // ['cherry', 'blueberry', 'blackberry', 'apple', 'mango', 'pineapple']

//14. length - returns the number of elements in the array
console.log(fruits.length); // 4

//15. includes() - checks if an array contains a certain element
let hasBanana = fruits.includes('banana');
console.log(hasBanana); // false

//16. find() - returns the first element that satisfies a provided testing function
let foundFruit = fruits.find(function(fruit) {
    return fruit.startsWith('b');
});
console.log(foundFruit); // 'blueberry'

//17. map() - creates a new array with the results of calling a provided function on every element
let upperFruits = fruits.map(function(fruit) {
    return fruit.toUpperCase();
});
console.log(upperFruits); // ['CHERRY', 'BLUEBERRY', 'BLACKBERRY', 'APPLE']

//18. filter() - creates a new array with all elements that pass the test implemented by the provided function
let bFruits = fruits.filter(function(fruit) {
    return fruit.startsWith('b');
});
console.log(bFruits); // ['blueberry', 'blackberry']

//19. reduce() - applies a function against an accumulator and each element to reduce it to a single value
let fruitString = fruits.reduce(function(accumulator, fruit) {
    return accumulator + ', ' + fruit;
});
console.log(fruitString); // 'cherry, blueberry, blackberry, apple'

//20. flat() - creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
let nestedFruits = [['apple', 'banana'], ['cherry', 'date']];
let flatFruits = nestedFruits.flat();
console.log(flatFruits); // ['apple', 'banana', 'cherry', 'date']

