//interface (Interface is a way to define the shape of an object in TypeScript. So you dont have to define it in the function.)
interface User {
  name: string;
  age: number;
  email?: string; //optional property
  readonly id: number; //readonly property
}

//object type annotation (calling the interface in the object)
let user: User = {
  name: "Alice",
  age: 30,
  id: 1,
};

//user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property

//interface with methods
interface Product {
  name: string;
  price: number;
  getDiscountedPrice(percent: number): number; //method
}

let laptop: Product = {
  name: "macbook",
  price: 1000,
  getDiscountedPrice(percent: number): number {
    return this.price * (percent / 100);
  },
};

console.log("Discounted price: " + laptop.getDiscountedPrice(12)); // 120
