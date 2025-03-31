"use strict";
// Typescriptda sinflar
class Person {
    constructor(name, age) {
        this._name = "Azimjn";
        this._age = 25;
        this._name = name;
        this._age = age;
    }
    // 1 ta klassda constructordan faqat 1 marotaba foydalaniladi
    // constructor () {}
    // method
    info(value) {
        return `${this._name} - ${this._age + value} yoshda`;
    }
    static description() {
        return `Bu klass Person haqida ...`;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value > 0 && value < 100) {
            this._age = value;
        }
        else {
            throw new Error("Siz noto'g'ri yosh kiritdingiz");
        }
    }
}
// method1() {}
// method2() {}
Person.isFlying = false;
const azimjon = new Person("Azimjon", 25);
const sarvar = new Person("Sarvar", 23);
// const azimjon: { name: string; age: number } = { name: "Azimjon", age: 25 };
// const sarvar: { name: string; age: number } = { name: "Sarvar", age: 23 };
// console.log(azimjon);
// console.log(azimjon.info(2));
// console.log(Person.isFlying);
// console.log(Person.description());
// console.log(sarvar);
// console.log(azimjon);
// azimjon.age = 26;
// azimjon.age = -1;
// console.log(azimjon.age);
if (azimjon instanceof Person) {
    console.log("Tegishli");
}
else {
    console.log("Tegishli emas");
}
//# sourceMappingURL=index.js.map