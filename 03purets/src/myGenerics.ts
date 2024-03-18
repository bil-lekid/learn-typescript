// * this is generic
const score: Array<number> = [];
const names: Array<string> = [];

// * classic ts, but how many union?
function identityOne(val: boolean | number): boolean | number {
  return val;
}

// * why even use ts bro
function identityTwo(val: any): any {
  return val;
}

// * accepts like any but logged the type and now return needs to be the same type
function identityThree<Type>(val: Type): Type {
  return val;
}
// * same but yknow T, can be any alphabets
function identityFour<T>(val: T): T {
  return val;
}

// * genertic with arrays
function getSearchProducts<T>(products: T[]): T {
  // do some database operations
  const myIndex = 3;
  return products[myIndex];
}
// ? same thing but arrow function
const getMoreSearchProducts = <T>(products: T[]): T => {
  // do some database operations
  const myIndex = 4;
  return products[myIndex];
};

interface database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T, U extends number>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

anotherFunction(3, 4);

interface Quiz {
  name: string;
  type: string;
}
interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];
  addToCart(product: T) {
    this.cart.push(product);
  }
}
