//string literal types
let direction: "up" | "down" | "left" | "right"; //direction is a variable that can choose any of these values.not a union.
direction = "up"; // valid

console.log(`Direction is set to: ${direction}`);

//numeric literal types
let diceRoll: 1 | 2 | 3 | 4 | 5 | 6; //diceRoll is a variable that can choose any of these values.not a union.
diceRoll = 3; // valid

console.log(`Dice roll is: ${diceRoll}`);

//combining with other types
type SuccessResponse = {
  status: "success";
  message: string;
};

type ErrorResponse = {
  status: "error";
  message: string;
};

type ApiResponse = SuccessResponse | ErrorResponse;

function handleResponse(response: ApiResponse): void {
  if (response.status === "success") {
    console.log(`Success: ${response.message}`);
  } else {
    console.log(`Error: ${response.message}`);
  }
}

const successResponse: SuccessResponse = {
  status: "success",
  message: "Data fetched successfully.",
};

const errorResponse: ErrorResponse = {
  status: "error",
  message: "Failed to fetch data.",
};

handleResponse(successResponse);
handleResponse(errorResponse);

//another example
type aboveAge = {
  message: "You are above the required age.";
};

type belowAge = {
  message: "You are below the required age.";
};

type AgeResponse = aboveAge | belowAge;

let ages: number;

function handleAgeResponse(response: AgeResponse): void {
  if (ages >= 18) {
    console.log(`Above: ${response.message}`);
  } else {
    console.log(`Below: ${response.message}`);
  }
}

console.log("Testing with age 20:");
ages = 20;

console.log("Testing with age 15:");
ages = 15;
