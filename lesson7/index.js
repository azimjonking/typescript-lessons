"use strict";
// TypeScript classes & inheritance.
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
class Teacher extends Person {
    constructor(name, age, disciplines) {
        super(name, age);
        this.disciplines = [];
        this.disciplines = disciplines;
    }
    info() {
        const parent = super.sayHello();
        return `${parent} Men ${this.disciplines[0]} dan dars beraman.`;
    }
}
const azimjon = new Person("Azimjon", 25);
console.log(azimjon);
console.log(azimjon.sayHello());
const sarvar = new Student("Sarvar", 23, "301-guruh", 3);
// sarvar.
console.log(sarvar);
console.log(sarvar.sayHello());
// let a: unknown = 1;
// let b: number = <number>a
const newSarvar = sarvar;
// newSarvar.
console.log(newSarvar);
console.log(newSarvar.sayHello());
const abror = new Teacher("Abror", 34, ["React", "JS"]);
console.log(abror);
console.log(abror.sayHello());
console.log(abror.info());
//# sourceMappingURL=index.js.map