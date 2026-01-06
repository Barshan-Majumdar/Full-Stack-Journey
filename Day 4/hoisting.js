//Hoisting of variables adn functions in javascript

console.log(a); //undefined due to hoisting
var a = 10;
console.log(a); //10    

//Function hoisting
hoistedFunction(); //Works due to hoisting
function hoistedFunction() {
    console.log("This function is hoisted!");
}

//Function expression hoisting
try {
    notHoistedFunction(); //Error: notHoistedFunction is not a function
} catch (e) {
    console.log(e.message);
}
var notHoistedFunction = function() {
    console.log("This function is not hoisted!");
}

notHoistedFunction(); //Works fine now

