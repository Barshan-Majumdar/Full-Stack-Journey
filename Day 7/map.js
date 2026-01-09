const a = [1, 2, 3 , 4, 5];
const b = a.map(x => x * 2);
console.log(b); // [2, 4, 6, 8, 10]

const users = [{
    fName : 'Barshan',
    lNAme : 'Majumdar',
    age : '20'

}];

console.log(users.map(user => user.fName)); // ['Barshan']