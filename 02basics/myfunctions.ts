function addTwo(num: number): number {
  return num + 2;
  // return "hello"; // * error since inferred in function to return number
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(
  name: string,
  email: string,
  password: string,
  isPaid: boolean
) {}

// * default value
let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

// * two return different type how?
function getValue(myVal: number) {
  if (myVal) {
    return true;
  }
  return "200 OK";
}

// * arrow function example
const getHello = (s: string): string => {
  return "";
};

// * array is smart
const heros = ["thor", "spiderman", "ironman"];
// const heros = [1,2,3]

heros.map((hero): string => {
  return `hero is ${hero}`;
});

// * type hinting for returning nothing
function consoleError(errmsg: string): void {
  console.log(errmsg);
}

// * how to handleherror, never type
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

addTwo(5);
getUpper("Billy");
signUpUser("Billy", "billy@ex.dev", "xd", true);
loginUser("b", "b@b.com");

export {};
