//Conditional Statements in JavaScript

//If-Else Statement
let age = 18;

if (age < 18) {
    console.log("You are a minor.");
} else {
    console.log("You are an adult.");
}

//If-Else If-Else Statement
let score = 85; 
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

//Switch Statement
let day = 3;
let dayName;    
switch (day) {
    case 1:
        dayName = "Monday"; 
        break;
    case 2:
        dayName = "Tuesday";    
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

