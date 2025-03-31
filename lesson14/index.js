"use strict";
// TypeScript generic type
function getName(person) {
    console.log(person.name);
}
getName({ name: "Abror" });
function getProperty(obj, key) {
    return obj[key];
}
const result = getProperty({ name: "Azimjon", age: 25, lastName: "Jalilov" }, "lastName");
//# sourceMappingURL=index.js.map