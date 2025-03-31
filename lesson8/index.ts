// TypeScript interface.

// let a: number = 1;
// interface IPerson {
//   _name: string;
//   _age: number; // _age?: number;
//   sayHello(): string; // sayHello: () => string;
// }

// type IPerson = {
//   _name: string;
//   _age: number; // _age?: number;
//   sayHello(): string; // sayHello: () => string;
// };

// ==============================================

// interface IPerson {
//   _name: string;
//   _age: number;
// }

// interface IPerson {
//   sayHello(): string;
// }

// type IPerson = {
//   _name: string;
//   _age: number;
// };

// type IPerson = {
//   sayHello(): string;
// };

// ==============================================

// interface IPersonProps {
//   _name: string;
// }

// interface IPersonProps2 {
//   _age: number;
// }

// interface IPerson extends IPersonProps, IPersonProps2 {
//   sayHello(): string;
// }

type IPersonProps = {
  _name: string;
};

type IPersonProps2 = {
  _age: number;
};

type IPerson = IPersonProps &
  IPersonProps2 & {
    sayHello(): string;
  };

class Person implements IPerson {
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

// class Person {}
// class Test {}

interface IStudent extends IPerson {
  _group: string;
  _course: number;
}

class Student extends Person implements IStudent {
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

const azimjon: Person = new Person("Azimjon", 25);
console.log(azimjon);
console.log(azimjon.sayHello());

const sarvar: IStudent = new Student("Sarvar", 23, "301-guruh", 3);
console.log(sarvar);
console.log(sarvar.sayHello());
