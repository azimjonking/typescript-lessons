"use strict";
// TypeScript generic type
let arr = [1, "str", true];
const person = { name: "Azimjon", age: 25 };
// ===================================
class Cat {
    say() {
        console.log("Myau");
    }
}
class Dog {
    say() {
        console.log("Vov");
    }
}
function createObject(clas) {
    return new clas();
}
let cat = createObject(Cat);
let dog = createObject(Dog);
cat.say();
dog.say();
//# sourceMappingURL=index.js.map