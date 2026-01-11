//prototypes in JavaScript
function Person(name, age) {
    this.name = name;
    this.age = age;
}   
Person.prototype.display = function() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}
const person1 = new Person("Charlie", 25);
person1.display(); //output: Name: Charlie, Age: 25

//adding prototype of a child class to its parent class
function Employee(name, age, position) {
    Person.call(this, name, age);
    this.position = position;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.displayPosition = function() {
    console.log(`Position: ${this.position}`);
}
const employee1 = new Employee("David", 28, "Developer");
employee1.display(); //output: Name: David, Age: 28
employee1.displayPosition(); //output: Position: Developer

//modifying prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
}
person1.greet(); //output: Hello, my name is Charlie