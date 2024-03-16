"use strict";
// class User {
//   public email: string;
//   private name: string;
//   readonly city: string = "";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
// * better way to write this
class User {
    constructor(email, name // public userId: string
    ) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Jakarta";
    }
    get getAppleEmail() {
        return `apple: ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
    deleteToken() {
        console.log("Token deleted");
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const billy = new User("kek@kek.com", "billy");
// billy.city = "Jakarta"; // * city is read only
console.log(billy.email);
billy.courseCount = 4; // * set _courseCount to 4
console.log(billy.courseCount); // * get _courseCount = 1 but set to 4
