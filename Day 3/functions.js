//Functions in JavaScript

//Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
}   

console.log(greet("Alice")); // Output: Hello, Alice!


//Function Expression
const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3)); // Output: 8

//Arrow Function
const multiply = (x, y) => x * y;
console.log(multiply(4, 6)); // Output: 24

//Function with Default Parameters
function power(base, exponent = 2) {
    return base ** exponent;
}   
console.log(power(3));    // Output: 9

//Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("This function runs immediately!");
})(); // Output: This function runs immediately!

//Recursive Function    
function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5)); // Output: 120

//Higher-Order Function
function applyOperation(a, b, operation) {
    return operation(a, b);
}  
const sumResult = applyOperation(10, 5, (x, y) => x + y);
console.log(sumResult); // Output: 15

//Function with Rest Parameters
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}  
console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15

//Function with Callback
function fetchData(callback) {
    setTimeout(() => {
        const data = "Sample Data";
        callback(data);
    }, 1000);
}

