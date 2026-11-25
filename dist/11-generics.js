"use strict";
//generics in typescript : it allows you to create reusable components that can work with a variety of types rather than a single one.
function identity(arg) {
    return arg;
}
let output1 = identity("Hello, TypeScript!"); //let output1 = identity("Hello, TypeScript!"); (this also works because TypeScript can infer the type based on the argument provided)
let output2 = identity(42); //let output2 = identity(42); (this also works because TypeScript can infer the type based on the argument provided)
console.log(output1); // Output: Hello, TypeScript!
console.log(output2); // Output: 42
//generic with array
function getArray(items) {
    return items[0];
}
let firstArray = getArray([1, 2, 3, 4]);
let firstStringArray = getArray(["apple", "banana", "cherry"]);
let firstEmptyArray = getArray([]); // returns undefined since the array is empty
console.log(firstArray); // Output: 1
console.log(firstStringArray); // Output: apple
console.log(firstEmptyArray); // Output: undefined
let stringNumberPair = {
    key: "age",
    value: 30,
};
let numberStringPair = {
    key: 1,
    value: "one",
};
console.log(stringNumberPair); // Output: { key: 'age', value: 30 }
console.log(numberStringPair); // Output: { key: 1, value: 'one' }
let stringNumberPair2 = {
    key: {
        name: "Example",
        myKey: "",
    },
    value: 27,
};
console.log(stringNumberPair2); // Output: { key: { name: 'Example', myKey: '' }, value: 27 }
//generic classes
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data = this.data.filter((i) => i !== item);
    }
    getItems() {
        return [...this.data];
    }
}
let textStorage = new DataStorage();
textStorage.addItem("Hello World");
console.log(textStorage.getItems()); // Output: ['Hello World']
let numberStorage = new DataStorage();
numberStorage.addItem(42);
numberStorage.addItem(100);
console.log(numberStorage.getItems()); // Output: [42, 100]
numberStorage.removeItem(42);
console.log(numberStorage.getItems()); // Output: [100]
function logLength(arg) {
    console.log(`Length: ${arg.length}`);
    return arg;
}
logLength("Hello, TypeScript!"); // valid, string has a length property
logLength([1, 2, 3]); // valid, array has a length property
logLength({ length: 10, value: "example" }); // valid, object has a length property
