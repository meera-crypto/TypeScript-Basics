"use strict";
//object type annotation (calling the interface in the object)
let user = {
    name: "Alice",
    age: 30,
    id: 1,
};
let laptop = {
    name: "macbook",
    price: 1000,
    getDiscountedPrice(percent) {
        return this.price * (percent / 100);
    },
};
console.log("Discounted price: " + laptop.getDiscountedPrice(12)); // 120
