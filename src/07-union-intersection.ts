//union types(OR)
type status = "active" | "inactive" | "pending";

function setStatus(s: status): void {
  console.log(`Status set to: ${s}`);
}
setStatus("inactive"); // valid

//union types with primitives
type UID = string | number;
function printId(id: UID): void {
  console.log(`ID: ${id}`);
}
printId(123); // valid
printId("abc"); // valid

//intersection types(AND)
interface Animal {
  name: string;
}

interface Breed {
  breed: string;
}

type Dog = Animal & Breed;

let myDog: Dog = {
  name: "Buddy",
  breed: "Golden Retriever",
};

console.log(`My dog's name is ${myDog.name} and he is a ${myDog.breed}.`);
