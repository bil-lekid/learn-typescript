// * classic narrowing
function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  } else {
    return val + 3;
  }
}
// ? what if number array?

function provideId(id: string | null) {
  if (!id) {
    console.log("please provide ID");
    return "kek";
  }
  id.toLowerCase();
}

// * example from documentation, this will catch the empty string as well since it is a falsy value
function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === " string") {
      console.log(strs);
    }
  }
}
