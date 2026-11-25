//enum (keyword)

enum Fruits {
  orange = 10, //=10 is the initialiser. if no value is provided, it starts from 0
  apple,
  banana,
  grape,
}

let myFruit: Fruits = Fruits.orange;
console.log(myFruit);

//string enum
enum Status {
  pending = "Pending",
  approved = "Approved",
  rejected = "Rejected",
}

let stat: Status = Status.approved; //any other value shows errors
console.log(stat);

//const enum (more performant)
const enum HttpStatus {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

// let req: HttpStatus = HttpStatus.BadRequest;
// console.log(req); //output = 400

function handleResponses(status: HttpStatus): void {
  if (status === HttpStatus.OK) {
    console.log("SUCCESS!");
  } else {
    console.log("UNSUCCESSFUL!!");
  }
}

handleResponses(400);
