interface Todo {
  title: string;
  description?: string;
  completed?: boolean;
  createdAt: Date;
  assignedTo: string;
}

//partial - makes all properties optional
type PartialTodo = Partial<Todo>;
let updatedTodo: PartialTodo = {
  title: "Updated title",
  completed: true,
};

//required - makes all properties required
type RequiredTodo = Required<Todo>;

//readonly - makes all properties readonly
type ReadonlyTodo = Readonly<Todo>;
let readonlyTodo: ReadonlyTodo = {
  title: "Readonly title",
  description: "This is a readonly todo",
  completed: false,
  createdAt: new Date(),
  assignedTo: "John Doe",
};
//readonlyTodo.title = "New title"; // Error: Cannot assign to 'title' because it is a read-only property

//pick - creates a type by picking a set of properties from another type
type PickedTodo = Pick<Todo, "title" | "completed">;

//omit - creates a type by omitting a set of properties from another type
type OmittedTodo = Omit<Todo, "description" | "assignedTo">;

//record - construct object type with specified keys and values
type PageInfo = {
  title: string;
  url: string;
};

type Pages = "home" | "about" | "contact";

//merging pages and page info to create a record type using key-value pairs
type PageRecord = Record<Pages, PageInfo>;

//now PageRecord is (hover over PageRecord to see the type):
// type PageRecord = {
//   about: PageInfo;
//   contact: PageInfo;
//   home: PageInfo;
// };

let pages: PageRecord = {
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

type TodoReturnType = ReturnType<typeof getTodo>; //on hover over TodoReturnType, you will see the type of the return value of getTodo function. It will be the same as the Todo interface.
