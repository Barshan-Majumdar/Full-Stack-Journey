//object literal in JavaScript
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log("Person's Full Name:", person.fullName()); // John Doe

//accessing object properties
console.log("First Name:", person.firstName); // John
console.log("Last Name:", person["lastName"]); // Doe

//adding new property to object
person.gender = "Male";
console.log("Gender:", person.gender); // Male

//deleting a property from object
delete person.age;
console.log("Age after deletion:", person.age); // undefined

//iterating over object properties
for (let key in person) {
    console.log(key + ": " + person[key]);
}
//output:
// firstName: John
// lastName: Doe
// fullName: function() { return this.firstName + " " + this.lastName; }

//nested object
const student = {
    name: "Alice",
    marks: {
        math: 90,
        science: 85
    }
};
console.log("Student's Math Marks:", student.marks.math); // 90
console.log("Student's Science Marks:", student["marks"]["science"]); // 85

//object methods
const calculator = {
    add: function(a, b) {   
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};
console.log("Addition:", calculator.add(5, 3)); // 8
console.log("Subtraction:", calculator.subtract(5, 3)); // 2
