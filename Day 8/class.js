//classes in javascript

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    fullName() {
        return this.firstName + " " + this.lastName;
    }
    isAdult() {
        return this.age >= 18;
    }
}

const person1 = new Person("John", "Doe", 25);
console.log("Person 1 Full Name:", person1.fullName()); // John Doe
console.log("Is Person 1 Adult?:", person1.isAdult()); // true
const person2 = new Person("Jane", "Smith", 15);
console.log("Person 2 Full Name:", person2.fullName()); // Jane Smith
console.log("Is Person 2 Adult?:", person2.isAdult()); // false

//inheritance in classes
class Student extends Person {
    constructor(firstName, lastName, age, grade) { 
        super(firstName, lastName, age);
        this.grade = grade;
    }
    getGrade() {
        return this.grade;
    }  
}

const student1 = new Student("Alice", "Johnson", 20, "A");
console.log("Student 1 Full Name:", student1.fullName()); // Alice Johnson
console.log("Student 1 Grade:", student1.getGrade()); // A
console.log("Is Student 1 Adult?:", student1.isAdult()); // true
const student2 = new Student("Bob", "Brown", 16, "B");
console.log("Student 2 Full Name:", student2.fullName()); // Bob Brown
console.log("Student 2 Grade:", student2.getGrade()); // B
console.log("Is Student 2 Adult?:", student2.isAdult()); // false

