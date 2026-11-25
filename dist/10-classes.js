"use strict";
//class: A class is a blueprint for creating objects with properties and methods. It encapsulates data and behavior related to that data.
class Person {
    //constructor: A constructor is a special method that is called when an object is created from a class. It initializes the object's properties.
    constructor(ProfileName, RealAge, OfficalMail) {
        this.ProfileName = ProfileName;
        this.RealAge = RealAge;
        this.OfficalMail = OfficalMail;
    }
    //method: A method is a function that is defined inside a class. It can access the class's properties and perform actions related to the object.
    introduce() {
        return "Hi my name is " + this.ProfileName + ", I am " + this.RealAge;
    }
    //getter
    getName() {
        return this.ProfileName;
    }
    //setter
    setName(newName) {
        this.ProfileName = newName;
    }
}
const person1 = new Person("Alice", 30, "alice@example.com");
console.log(person1.introduce()); // Hi my name is Alice, I am 30
person1.setName("Bob");
console.log(person1.introduce()); // Hi my name is Bob, I am 30
console.log(person1.getName()); // Bob
//another way of creating class with constructor and public properties
class Employee {
    constructor(id, name, department) {
        this.id = id;
        this.name = name;
        this.department = department;
    }
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Department: ${this.department}`;
    }
}
let employee1 = new Employee(1, "John Doe", "Engineering");
console.log(employee1.getDetails());
//inheritance in ts : extends - only protected and public properties can be accessed in child class
class Manager extends Employee {
    constructor(id, name, department, teamSize) {
        super(id, name, department); //super(keyword) - calls the constructor variables of the parent class
        this.teamSize = teamSize;
    }
    getTeamInfo() {
        return `${this.name} manages a team of ${this.teamSize} people in the ${this.department} department.`;
    }
}
let manager1 = new Manager(2, "Jane Smith", "Marketing", 5);
console.log(manager1.getDetails());
console.log(manager1.getTeamInfo());
