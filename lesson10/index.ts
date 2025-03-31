// TypeScript [public, private, protected, (readonly)].

// classes
class Person {
  public readonly _name: string = "";
  // public _name: string = "";
  // private _name: string = "";
  // protected _name: string = "";
  _age: number = 0;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  // constructor(public name: string, private age: number) {}

  sayHello(): string {
    return `Assalomu aleykum. Mening ismim ${this._name}`;
  }
}

class Student extends Person {
  _group: string = "";
  _course: number = 0;

  constructor(name: string, age: number, group: string, course: number) {
    super(name, age);
    this._group = group;
    this._course = course;
  }

  info(): string {
    return `
      Ism: ${this._name}
      Yosh: ${this._age}
      Kurs: ${this._course}
      Guruh: ${this._group}
    `;
  }
}

const azimjon: Person = new Person("Azimjon", 25);
console.log(azimjon);
// azimjon._name = "Anvar"

const sarvar: Student = new Student("Sarvar", 23, "301-guruh", 3);
console.log(sarvar);
// sarvar.
