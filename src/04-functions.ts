//functions with types
function add(a: number, b: number): number {
  return a + b;
}
console.log("Sum is: " + add(5, 10));

//function with optional parameter
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  }
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));
console.log(greet("Bob", "Hi"));

//default parameters
function multiply(a: number, b: number = 1): number {
  return a * b;
}
console.log("Product is: " + multiply(5, 10));
console.log("Product is: " + multiply(5));

//rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log("Sum of numbers: " + sum(1, 2, 3, 4, 5));

//arrow functions
const divide = (a: number, b: number): number => {
  return a / b;
};
console.log("Division is: " + divide(10, 2));

//function types (can call existing functions or write a new function as long as it matches)
let calculate: (x: number, y: number) => number;
calculate = divide;
console.log("Calculated sum: " + calculate(5, 15));
