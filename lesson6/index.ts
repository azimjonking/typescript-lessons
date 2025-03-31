// Typescriptda sinflar

class Person {
  _name: string = "Azimjn";
  _age: number = 25;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  // 1 ta klassda constructordan faqat 1 marotaba foydalaniladi
  // constructor () {}

  // method
  info(value: number): string {
    return `${this._name} - ${this._age + value} yoshda`;
  }
  // method1() {}
  // method2() {}

  static isFlying = false;
  static description(): string {
    return `Bu klass Person haqida ...`;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value > 0 && value < 100) {
      this._age = value;
    } else {
      throw new Error("Siz noto'g'ri yosh kiritdingiz");
    }
  }
}

const azimjon: Person = new Person("Azimjon", 25);
const sarvar: Person = new Person("Sarvar", 23);

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
} else {
  console.log("Tegishli emas");
}
