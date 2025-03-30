"use strict";
// TypeScript => functions, signature functions, function overload
// function pow(x, y) {
//   return x ** y;
// }
function pow(x, y) {
    return `${x} ** ${y} = ${x ** y}`;
}
console.log(pow(2, 3));
// const add = (x, y) => x + y;
const add = (x, y) => x + y;
function log(x) {
    console.log(x);
}
function someFunc(s) {
    throw new Error(s);
}
// signature functions
let c;
function overloadFunc(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    else {
        return `${x} ${y}`;
    }
}
console.log(overloadFunc(1, 2));
console.log(overloadFunc("Javob", 17));
//# sourceMappingURL=index.js.map