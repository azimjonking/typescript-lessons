// TypeScript generic type

let arr = [1, "str", true];

type A<T> = T extends (infer U)[] ? U : never;

type B = typeof arr;

type C = A<B>;

const person = { name: "Azimjon", age: 25 };

type A2<T> = T extends {
  [key: string]: infer U;
}
  ? U
  : never;

type B2 = typeof person;

type C2 = A2<B2>;

// ===================================

class Cat {
  say(): void {
    console.log("Myau");
  }
}

class Dog {
  say(): void {
    console.log("Vov");
  }
}

interface IClass<T> {
  new (): T;
}

function createObject<T>(clas: IClass<T>) {
  return new clas();
}

let cat = createObject(Cat);
let dog = createObject(Dog);

cat.say();
dog.say();
