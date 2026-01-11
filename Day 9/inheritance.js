//inheritance in javascript

class Customer{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    display(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

class PremiumCustomer extends Customer{
    constructor(name, age, membershipLevel){
        super(name, age); //calling parent class constructor   
        this.membershipLevel = membershipLevel;
    }

    display(){
        super.display(); //calling parent class method
        console.log(`Membership Level: ${this.membershipLevel}`);
    }
}

const customer1 = new Customer("Alice", 30);
customer1.display();//ouput: Name: Alice, Age: 30

const premiumCustomer1 = new PremiumCustomer("Bob", 40, "Gold");
premiumCustomer1.display();//output: Name: Bob, Age: 40, Membership Level: Gold


