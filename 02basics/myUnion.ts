// * simple union
let score: number | string = 33;
// * can re declare both types
score = 44;
score = "55";

// * union of object type
type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let billy: User | Admin = { name: "Billy", id: 334 };
billy = { name: "Billy", username: "kek", id: 334 };

function getDBID(id: number | string) {
  // making some API calls
  console.log(`DB id is: ${id}`);
}

getDBID(3);
getDBID("3");

// * can be either string or number in array
const data: (string | number)[] = [1, 2, 3, "4"];

// * specific VALUE inferring
let pi: 3.14 = 3.14;
let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "kek" // * will output error
