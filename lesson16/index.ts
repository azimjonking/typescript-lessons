// TypeScript Utils
// Partial, Required, NonNullable, Record

// Partial
type Person1 = { name: string; age: number };
type Person2 = Partial<Person1>;
// type Person2 = {
//   name?: string | undefined;
//   age?: number | undefined;
// }

type MyPartial<T> = { [P in keyof T]?: T[P] };
type Person3 = MyPartial<Person1>;
// type Person3 = {
//   name?: string | undefined;
//   age?: number | undefined;
// };

// Required
type Animal1 = { name?: string; weight: number };
type Animal2 = Required<Animal1>;
// type Animal2 = {
//   name: string;
//   weight: number;
// }

type MyRequired<T> = { [P in keyof T]-?: T[P] };
type Animal3 = MyRequired<Animal1>;
// type Animal3 = {
//   name: string;
//   weight: number;
// }

// NonNullable

type Color1 = string | null | undefined | number | boolean;
type Color2 = NonNullable<Color1>; // string | number | boolean

type MyNonNullable<T> = T extends null | undefined ? never : T;
type Color3 = MyNonNullable<Color1>; // string | number | boolean

// Record
type Dimensions1 = { width: number; height: number; length: number | string };
type Dimensions2 = Record<"width" | "height" | "length", number>;
// type Dimensions2 = {
//   width: number;
//   height: number;
//   length: number;
// }

// type MyRecord<K extends string | number | symbol, T> = { [P in K]: T };

// type Test = keyof any;
type MyRecord<K extends keyof any, T> = { [P in K]: T };
type Dimensions3 = MyRecord<"width" | "height" | "length", number>;
