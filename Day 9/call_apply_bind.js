//call, apply method

const person1 = {
    fullName: function(city, country){
        return this.firstName + " " + this.lastName + ", " + city + ", " + country;
    }
}
const person2 = {
    firstName: "John",
    lastName: "Doe"
}
person1.fullName.call(person2, "Oslo", "Norway");
person1.fullName.apply(person2, ["Oslo", "Norway"]);
//output: "John Doe, Oslo, Norway"

//bind method
const person3 = {
    firstName: "Mary",
    lastName: "Jane"
}

const boundFullName = person1.fullName.bind(person3, "Stockholm", "Sweden");
boundFullName();
//output: "Mary Jane, Stockholm, Sweden"

