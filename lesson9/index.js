"use strict";
// TypeScript abstract classes.
// classes
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
    info() {
        return `
      Ism: ${this._name}
      Yosh: ${this._age}
      Kurs: ${this._course}
      Guruh: ${this._group}
    `;
    }
}
class Teacher extends Person {
    info() {
        return ``;
    }
}
// const azimjon: IPerson = new Person("Azimjon", 25);
// console.log(azimjon);
const sarvar = new Student("Sarvar", 23, "301-guruh", 3);
console.log(sarvar);
console.log(sarvar.info());
//# sourceMappingURL=index.js.map