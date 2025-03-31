"use strict";
// TypeScript interface.
class Person {
    constructor(name, age) {
        this._name = "";
        this._age = 0;
        this._name = name;
        this._age = age;
    }
    sayHello() {
        return `Assalomu aleykum. Mening ismim ${this._name}`;
    }
}
class Student extends Person {
    constructor(name, age, group, course) {
        super(name, age);
        this._group = "";
        this._course = 0;
        this._group = group;
        this._course = course;
    }
    sayHello() {
        const parentMethod = super.sayHello();
        return `${parentMethod} Men ${this._course}-kursning ${this._group}-guruhida o'qiyman.`;
    }
}
const azimjon = new Person("Azimjon", 25);
console.log(azimjon);
console.log(azimjon.sayHello());
const sarvar = new Student("Sarvar", 23, "301-guruh", 3);
console.log(sarvar);
console.log(sarvar.sayHello());
//# sourceMappingURL=index.js.map