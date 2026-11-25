//type alias (similar to interface but can be used for any type, not just objects)
type Point = {
  x: number;
  y: number;
};

let point: Point = { x: 10, y: 20 };
console.log(`Point coordinates: (${point.x}, ${point.y})`);

//type aliases for primitives
type ID = string | number;
let userId: ID = "abc123";
let productId: ID = 789;

console.log(`User ID: ${userId}`);
console.log(`Product ID: ${productId}`);

//type aliases vs interfaces
//1. Interfaces can be extended but type aliases cannot be extended
interface Shape {
  color: string;
}
interface Circle extends Shape {
  radius: number;
}
let circle: Circle = { color: "red", radius: 10 };
console.log(`Circle color: ${circle.color}, radius: ${circle.radius}`);

//2. Interfaces can be merged but type aliases cannot be merged
interface Rectangle {
  width: number;
}
interface Rectangle {
  height: number;
}
let rectangle: Rectangle = { width: 10, height: 20 };
console.log(`Rectangle width: ${rectangle.width}, height: ${rectangle.height}`);

//use interfaces for object shapes
//type aliases for other types (primitives, unions, tuples, etc.)
