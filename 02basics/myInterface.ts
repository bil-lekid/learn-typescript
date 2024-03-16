interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrial: () => string; //* can do this
  startTrial(): string; //* this favorite way
  getCoupon(couponname: string, value: number): number;
}

// * reopening interface
interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const billy: Admin = {
  dbId: 22,
  email: "kek@kek.com",
  userId: 2211,
  role: "admin",
  startTrial: () => "Hello World",
  getCoupon: (name: "billy", off: 4) => 4,
  githubToken: "string",
};
billy.email = "b2H.com";
billy.googleId = "aydee";
