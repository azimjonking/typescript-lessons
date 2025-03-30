"use strict";
// Typescript - Arrays, tuples & Enums
// ====================================
// array - toplamlar
let a = [];
a = [12, "sdf", true, undefined, {}];
// let b = [1, 2, 3, 4];
// b = ["sdf"];
let b = [1, 2, 3];
b = [12, 34];
// b = ["sdf", true]
let c = [12];
c = [1, 2, 3, 4];
let d = [12, "asd", 232];
let e = [true, false, 12];
// e = [122, true, "asdas"]
// ====================================
// tuples - kortejlar
let f;
f = [12, "name"];
// f = ["asd", 12];
// f = [12];
// f = ["asdas"];
let g;
g = [123, [12, "assdasd"]];
// ====================================
// Qayta hisoblash - enums
// {
//   "": 123555
// }
// number | symbol | string
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
// console.log(Gender.Male, Gender.Female);
// console.log(Gender[1], Gender[Gender.Female]);
// enum G {
//   A,
//   A2,
//   B = 10,
//   C,
// }
// console.log(G.A, G.A2, G.B, G.C);
var H;
(function (H) {
    H["A"] = "Hello";
    H["B"] = "Typescript";
})(H || (H = {}));
console.log(H.A, H.B);
console.log(10 /* I.A */, 11 /* I.B */);
//# sourceMappingURL=index.js.map