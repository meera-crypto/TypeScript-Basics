"use strict";
let updatedTodo = {
    title: "Updated title",
    completed: true,
};
let readonlyTodo = {
    title: "Readonly title",
    description: "This is a readonly todo",
    completed: false,
    createdAt: new Date(),
    assignedTo: "John Doe",
};
//now PageRecord is (hover over PageRecord to see the type):
// type PageRecord = {
//   about: PageInfo;
//   contact: PageInfo;
//   home: PageInfo;
// };
let pages = {
    home: { title: "Home Page", url: "/home" },
    about: { title: "About Us", url: "/about" },
    contact: { title: "Contact Us", url: "/contact" },
};
//returntype - creates a type that represents the return type of a function
function getTodo() {
    return {
        title: "Learn TypeScript",
        description: "Learn the basics of TypeScript",
        completed: false,
        createdAt: new Date(),
        assignedTo: "John Doe",
    };
}
