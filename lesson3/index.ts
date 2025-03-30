// TypeScript => functions, signature functions, function overload

// function pow(x, y) {
//   return x ** y;
// }

function pow(x: number, y: number): string {
  return `${x} ** ${y} = ${x ** y}`;
}

console.log(pow(2, 3));

// const add = (x, y) => x + y;
const add = (x: number, y: number): number => x + y;

function log(x: number): void {
  console.log(x);
}

function someFunc(s: string): never {
  throw new Error(s);
}

// signature functions

let c: (x: number, y: string) => string;

// c = function (a: number, b: number): number {
//   return a + b;
// }

// c = function (a: number, b: string): string {
//   return `${b}: ${a}`;
// };

// console.log(c(2, "Javob"));

// function overloads

function overloadFunc(x: number, y: number): number;
function overloadFunc(x: string, y: number): string;
function overloadFunc(x: any, y: any): any {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  } else {
    return `${x} ${y}`;
  }
}

console.log(overloadFunc(1, 2));
console.log(overloadFunc("Javob", 17));
