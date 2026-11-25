"use strict";
// TypeScript Primitives: types of values that are not objects
//basic
let age = 30;
let testname = "example";
let isActive = true;
//arrays
let ageGroup = [25, 30, 35];
let names = ["Alice", "Bob", "Charlie"];
//tuples
let person = ["Alice", 24];
//enum:An enum is a named set of related values. It gives those values readable names instead of repeating raw strings or numbers.
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
let favoriteColor = Color.Green;
console.log(favoriteColor);
//any
let randomValue = 10;
randomValue = "Hello";
randomValue = true;
//unknown
let userInput = 10;
userInput = "Hello";
//void function
function subscribe(message) {
    console.log(message);
}
//null and undefined
let u = undefined;
let n = null;
