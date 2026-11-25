// TypeScript Primitives: types of values that are not objects

//basic
let age: number = 30;
let testname: string = "example";
let isActive: boolean = true;

//arrays
let ageGroup: number[] = [25, 30, 35];
let names: string[] = ["Alice", "Bob", "Charlie"];

//tuples
let person: [string, number] = ["Alice", 24];

//enum:An enum is a named set of related values. It gives those values readable names instead of repeating raw strings or numbers.
enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue",
}
let favoriteColor: Color = Color.Green;
console.log(favoriteColor);

//any
let randomValue: any = 10;
randomValue = "Hello";
randomValue = true;

//unknown
let userInput: unknown = 10;
userInput = "Hello";

//void function
function subscribe(message: string): void {
  console.log(message);
}

//null and undefined
let u: undefined = undefined;
let n: null = null;
