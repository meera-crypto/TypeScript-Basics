"use strict";
//string literal types
let direction; //direction is a variable that can choose any of these values.not a union.
direction = "up"; // valid
console.log(`Direction is set to: ${direction}`);
//numeric literal types
let diceRoll; //diceRoll is a variable that can choose any of these values.not a union.
diceRoll = 3; // valid
console.log(`Dice roll is: ${diceRoll}`);
function handleResponse(response) {
    if (response.status === "success") {
        console.log(`Success: ${response.message}`);
    }
    else {
        console.log(`Error: ${response.message}`);
    }
}
const successResponse = {
    status: "success",
    message: "Data fetched successfully.",
};
const errorResponse = {
    status: "error",
    message: "Failed to fetch data.",
};
handleResponse(successResponse);
handleResponse(errorResponse);
let ages;
function handleAgeResponse(response) {
    if (ages >= 18) {
        console.log(`Above: ${response.message}`);
    }
    else {
        console.log(`Below: ${response.message}`);
    }
}
console.log("Testing with age 20:");
ages = 20;
console.log("Testing with age 15:");
ages = 15;
