// * type inferring array
const superHero: string[] = [];
// const heroPower: number[] = []
const heroPower: Array<number> = [];

type User = {
  name: string;
  isActive: boolean;
};

const allUsers: User[] = [];

superHero.push("spiderman"); // * only can push string
heroPower.push(2); // * only can push number
allUsers.push({ name: "billy", isActive: true }); // * only can push object with types as User

// * syntax of array of array
const MLModels: number[][] = [
  [255, 255, 255],
  // * not able to input string ""
];
