"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Billy",
    email: "billy@example.dev",
    isActive: true,
};
// * inputting object to function
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "kenny", isPaid: true, email: "kek@kek.com" };
createUser(newUser);
// * type hinting return of object
function createCourse() {
    return { name: "reactjs", price: 399 };
}
function createUser1(user) {
    return { name: "", email: "", isActive: true };
}
createUser1({ name: "", email: "", isActive: true });
var myUser = {
    _id: "12345",
    name: "h",
    email: "email",
    isActive: false,
};
myUser.email = "h@gmail.com";
