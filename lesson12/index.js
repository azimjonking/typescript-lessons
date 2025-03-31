"use strict";
// TypeScript generic type
let arr = [1, 2, 3];
let arr2 = ["asd", "asdsa"];
const arr3 = [true, false, 13];
// function echo<T>(x: T): T {
//   return x;
// }
// const result = echo(12);
// const result = echo("Salom");
// const result: string = echo("Salom");
const echo = (x) => {
    return x;
};
const echo2 = (x) => {
    return x;
};
const echo3 = (x) => x;
const result = echo3("TS");
//# sourceMappingURL=index.js.map