"use strict";
//enum (keyword)
var Fruits;
(function (Fruits) {
    Fruits[Fruits["orange"] = 10] = "orange";
    Fruits[Fruits["apple"] = 11] = "apple";
    Fruits[Fruits["banana"] = 12] = "banana";
    Fruits[Fruits["grape"] = 13] = "grape";
})(Fruits || (Fruits = {}));
let myFruit = Fruits.orange;
console.log(myFruit);
//string enum
var Status;
(function (Status) {
    Status["pending"] = "Pending";
    Status["approved"] = "Approved";
    Status["rejected"] = "Rejected";
})(Status || (Status = {}));
let stat = Status.approved; //any other value shows errors
console.log(stat);
// let req: HttpStatus = HttpStatus.BadRequest;
// console.log(req); //output = 400
function handleResponses(status) {
    if (status === 200 /* HttpStatus.OK */) {
        console.log("SUCCESS!");
    }
    else {
        console.log("UNSUCCESSFUL!!");
    }
}
handleResponses(400);
