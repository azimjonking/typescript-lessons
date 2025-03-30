"use strict";
// Typescript tiplarni o'zgartirish va birlashtirish.
// unknown type, union types, literal types, type aliases, required and optional properties, operator in
// havfli usul
let a = 10;
let b = a;
// havfsiz usul
let c = 20;
// let d: number = c;
let e = c;
let f = c;
// (c as number).toFixed(2);
// (<number>c).toString();
// union type
let h = 10;
h = "tri";
h = true;
// literal types
let s;
// s = "asdasd";
// s = 12;
// s = true;
s = "sm";
s = "md";
s = "lg";
let s2 = "SM";
s2 = "MD";
s2 = "LG";
let s3 = false;
s3 = "MD";
s3 = "SM";
s3 = false;
let obj;
obj = { name: "str" };
obj = { age: 25 };
obj = { name: "sdf", age: 25 };
let obj2;
obj2 = { name: "Azimjon", age: 25 };
let obj3;
obj3 = { name: "Azimjon", age: 25 };
// obj3 = {name: "Azimjon", age: 25, weight: 75}
// obj3 = {age: 25}
if ("age" in obj3) {
    console.log("Mavjud");
}
else {
    console.log("Mavjud emas");
}
//# sourceMappingURL=index.js.map