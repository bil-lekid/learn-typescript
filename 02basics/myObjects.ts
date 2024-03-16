const User = {
  name: "Billy",
  email: "billy@example.dev",
  isActive: true,
};

// * inputting object to function
function createUser({ name: string, isPaid: boolean }) {}
let newUser = { name: "kenny", isPaid: true, email: "kek@kek.com" };
createUser(newUser);

// * type hinting return of object
function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 399 };
}

// * type aliases
type User = {
  name: string;
  email: string;
  isActive: boolean;
};
function createUser1(user: User): User {
  return { name: "", email: "", isActive: true };
}

createUser1({ name: "", email: "", isActive: true });
export {};

// * readonly and optional
type User1 = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credCardDetails?: number;
};

let myUser: User1 = {
  _id: "12345",
  name: "h",
  email: "email",
  isActive: false,
};

myUser.email = "h@gmail.com";
// myUser._id = "kek"; //* read only error

// * type mix and matching
type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

// type cardDetails = cardNumber & cardDate & {cvv:number}; //*bad
type cardDetails = cardNumber & cardDate; //* good
