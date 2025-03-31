// TypeScript generic type

// type A<T> = T;
// type B = A<string>;
// type C = A<"TS">;
// type D = A<number>;

// type A<T extends string> = T;
type A<T> = T extends string ? string : never;

type B = A<string>;
type C = A<"TS">;
type D = A<number>;

// function getName<T extends { name: string }>(person: T): void {
//   console.log(person.name);
// }

// getName({ name: "Azimjon", age: 25 });

// getName({ age: 25 });

interface IName {
  name: string;
}

function getName<T extends IName>(person: T): void {
  console.log(person.name);
}

getName({ name: "Abror" });
// getName({ age: 21 });

// ========================================

interface Inter {
  a: string;
  b: boolean;
  c: number;
}

type InterKeys = keyof Inter; // a | b | c

function getProperty<ObjType, ObjKey extends keyof ObjType>(
  obj: ObjType,
  key: ObjKey
) {
  return obj[key];
}

const result = getProperty(
  { name: "Azimjon", age: 25, lastName: "Jalilov" },
  "lastName"
);
