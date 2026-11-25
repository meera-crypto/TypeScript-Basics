"use strict";
function setStatus(s) {
    console.log(`Status set to: ${s}`);
}
setStatus("inactive"); // valid
function printId(id) {
    console.log(`ID: ${id}`);
}
printId(123); // valid
printId("abc"); // valid
let myDog = {
    name: "Buddy",
    breed: "Golden Retriever",
};
console.log(`My dog's name is ${myDog.name} and he is a ${myDog.breed}.`);
