// * tuple restriction order of data, useful for API and RGB value
const user: [string, number, boolean] = ["str", 123, true];
const rgb: [number, number, number] = [255, 23, 123];

type User = [number, string];
const newUser: User = [112, "kek@email.com"];

newUser[1] = "kek2@email.com"; // * mutable but string only
// newUser.push(true); // * error

export {};
