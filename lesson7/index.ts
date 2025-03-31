// TypeScript classes & inheritance.

class Person {
  _name: string = "";
  _age: number = 0;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

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

  sayHello(): string {
    const parentMethod = super.sayHello();
    return `${parentMethod} Men ${this._course}-kursning ${this._group}-guruhida o'qiyman.`;
  }
}

class Teacher extends Person {
  disciplines: string[] = [];

  constructor(name: string, age: number, disciplines: string[]) {
    super(name, age);
    this.disciplines = disciplines;
  }

  info(): string {
    const parent = super.sayHello();
    return `${parent} Men ${this.disciplines[0]} dan dars beraman.`;
  }
}

const azimjon: Person = new Person("Azimjon", 25);
console.log(azimjon);
console.log(azimjon.sayHello());

const sarvar: Student = new Student("Sarvar", 23, "301-guruh", 3);
// sarvar.
console.log(sarvar);
console.log(sarvar.sayHello());

// let a: unknown = 1;
// let b: number = <number>a

const newSarvar: Person = <Person>sarvar;
// newSarvar.

console.log(newSarvar);
console.log(newSarvar.sayHello());

const abror: Teacher = new Teacher("Abror", 34, ["React", "JS"]);
console.log(abror);
console.log(abror.sayHello());
console.log(abror.info());
