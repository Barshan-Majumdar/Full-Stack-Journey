//spread and rest operator

//spread operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // [1, 2, 3, 4, 5, 6]

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj); // { a: 1, b: 2, c: 3, d: 4 }

//rest operator
function sum(...numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return(sum);
}   
console.log(sum(1, 2, 3, 4)); // 
console.log(sum(5, 10, 15)); // 30

