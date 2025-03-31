"use strict";
// TypeScript [public, private, protected, (readonly)].
// classes
class Person {
    constructor(name, age) {
        this._name = "";
        // public _name: string = "";
        // private _name: string = "";
        // protected _name: string = "";
        this._age = 0;
        this._name = name;
        this._age = age;
    }
    // constructor(public name: string, private age: number) {}
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
const azimjon = new Person("Azimjon", 25);
console.log(azimjon);
// azimjon._name = "Anvar"
const sarvar = new Student("Sarvar", 23, "301-guruh", 3);
console.log(sarvar);
// sarvar.
//# sourceMappingURL=index.js.map