//find methods in javascript

const arr = [10, 20, 30, 40, 50];

const even = arr.find(element => element % 2 == 0);
console.log("First even number:", even);//10

const lastEven = arr.findLast(element => element % 2 == 0);
console.log("Last even number:", lastEven);//50

const evenElementINdex = arr.findIndex(element => element % 2 == 0);
console.log("Index of element 30:", evenElementINdex);//2

const lastEvenElementIndex = arr.findLastIndex(element => element % 2 == 0);
console.log("Last index of even number:", lastEvenElementIndex);//4
