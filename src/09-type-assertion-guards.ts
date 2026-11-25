//type assertions
let anyValue: unknown = "Hellos, TypeScript!";
let strLength: number = (anyValue as string).length;
//or
let anyNewValue: any = "Hello, TypeScript!";
let strLength2: number = (<string>anyNewValue).length;

console.log(strLength); // 18
console.log(strLength2); // 18

//type guards
function processValue(value: string | number) {
  if (typeof value === "string") {
    console.log(`String value: ${value.toUpperCase()}`);
  } else {
    console.log(`Number value: ${value.toFixed(2)}`);
  }
}
processValue("hello");
processValue(42);

//instanceof type guard: instanceof checks whether an object was created from a particular class. It returns true or false and can help TypeScript narrow a value’s type.
class dog {
  bark() {
    console.log("Woof!");
  }
}

class cat {
  meow() {
    console.log("Meow!");
  }
}

function animalSound(animal: dog | cat) {
  if (animal instanceof dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

const myDogs = new dog();
const myCat = new cat();

animalSound(myDogs); // Woof!
animalSound(myCat); // Meow!
