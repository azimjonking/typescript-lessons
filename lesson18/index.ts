// TypeScript - useful global utility types
// Pick, Extract, Exclude, Omit

type Vector1 = { x: number; y: number; z: number };
type Vector2 = Pick<Vector1, "x" | "y">;
// type Vector2 = {
//   x: number;
//   y: number;
// }

type MyPick<T, K extends keyof T> = { [P in K]: T[P] };
type Vector3 = MyPick<Vector1, "x" | "z">;
// type Vector2 = {
//   x: number;
//   y: number;
// }

// Extract

type A = string | number | boolean;
type B = string | boolean;

type C = Extract<A, B>; // string | boolean

type MyExtract<T, U> = T extends U ? T : never;

type D = MyExtract<A, B>; // string | boolean

// Exclude

type E = Extract<A, B>; // number

type MyExclude<T, U> = T extends U ? never : T;

type F = MyExclude<A, B>; // number

// Omit

type Person1 = { name: string; age: number; weight: number; height: number };
type Person2 = Omit<Person1, "weight" | "height">;
// type Person2 = {
//   name: string;
//   age: number;
// }

type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

type Person3 = MyOmit<Person1, "weight">;
// type Person3 = {
//   height: number;
//   name: string;
//   age: number;
// }
