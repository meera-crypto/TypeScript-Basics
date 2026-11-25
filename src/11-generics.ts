//generics in typescript : it allows you to create reusable components that can work with a variety of types rather than a single one.
function identity<Types>(arg: Types): Types {
  return arg;
}

let output1 = identity<String>("Hello, TypeScript!"); //let output1 = identity("Hello, TypeScript!"); (this also works because TypeScript can infer the type based on the argument provided)
let output2 = identity<number>(42); //let output2 = identity(42); (this also works because TypeScript can infer the type based on the argument provided)

console.log(output1); // Output: Hello, TypeScript!
console.log(output2); // Output: 42

//generic with array
function getArray<T>(items: T[]): T | undefined {
  return items[0];
}

let firstArray = getArray([1, 2, 3, 4]);
let firstStringArray = getArray(["apple", "banana", "cherry"]);
let firstEmptyArray = getArray([]); // returns undefined since the array is empty

console.log(firstArray); // Output: 1
console.log(firstStringArray); // Output: apple
console.log(firstEmptyArray); // Output: undefined

//generic interfaces
interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

let stringNumberPair: KeyValuePair<string, number> = {
  key: "age",
  value: 30,
};

let numberStringPair: KeyValuePair<number, string> = {
  key: 1,
  value: "one",
};

console.log(stringNumberPair); // Output: { key: 'age', value: 30 }
console.log(numberStringPair); // Output: { key: 1, value: 'one' }

//keyvalue pair with nested objects
interface KeyValue2<O, V> {
  key: {
    name: string;
    myKey: O;
  };
  value: V;
}

let stringNumberPair2: KeyValue2<string, number> = {
  key: {
    name: "Example",
    myKey: "",
  },
  value: 27,
};

console.log(stringNumberPair2); // Output: { key: { name: 'Example', myKey: '' }, value: 27 }

//generic classes
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T): void {
    this.data.push(item);
  }

  removeItem(item: T): void {
    this.data = this.data.filter((i) => i !== item);
  }

  getItems(): T[] {
    return [...this.data];
  }
}

let textStorage = new DataStorage<string>();
textStorage.addItem("Hello World");
console.log(textStorage.getItems()); // Output: ['Hello World']

let numberStorage = new DataStorage<number>();
numberStorage.addItem(42);
numberStorage.addItem(100);
console.log(numberStorage.getItems()); // Output: [42, 100]
numberStorage.removeItem(42);
console.log(numberStorage.getItems()); // Output: [100]

//generic constraints
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(`Length: ${arg.length}`);
  return arg;
}

logLength("Hello, TypeScript!"); // valid, string has a length property
logLength([1, 2, 3]); // valid, array has a length property
logLength({ length: 10, value: "example" }); // valid, object has a length property
