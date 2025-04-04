"use strict";
// TypeScript - Nullish assignment vs chaining operator
// ?? - ?
// ?? - Nullish assignment
// null, undefined
// || - yoki
// false, 0, "", undefined, null
let a = null;
a = undefined;
a = 20;
// // let b = "" ?? 0;
// let b = "" || 0;
let b = a !== null && a !== void 0 ? a : 0;
console.log(b);
// =========================
// ?. - chaining operator
// const obj = {
//   user: {
//     name: "",
//     country: {
//       region: "",
//     },
//   },
// };
// const obj2 = {
//   user: {
//     name: "",
//     country: {
//       region: "",
//     },
//   },
// };
// console.log(obj.user?.country?.region); // undefined
function add(x, y, cb) {
    let natija = x + y;
    // if (cb) {
    //   cb(natija);
    // }
    cb === null || cb === void 0 ? void 0 : cb(natija);
    return natija;
}
function calcProductPrice(arr) {
    let s = 0;
    arr.forEach((item) => {
        var _a;
        s += (_a = item === null || item === void 0 ? void 0 : item.price) !== null && _a !== void 0 ? _a : 0;
    });
    return s;
}
const result = calcProductPrice([
    { price: 1 },
    null,
    { price: 2 },
    undefined,
    { price: 3 },
    null,
    { price: 4 },
    undefined,
    { price: 5 },
]);
console.log("Result = ", result);
//# sourceMappingURL=index.js.map