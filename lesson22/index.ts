// TypeScript - BigInt
console.log("Number.MAX_VALUE", Number.MAX_VALUE);

console.log("Number.MAX_SAFE_INTEGER", Number.MAX_SAFE_INTEGER);

console.log("9007199254740991 + 2", Number.MAX_SAFE_INTEGER + 2);

console.log("9999999999999999", 9999999999999999);

// let a: bigint = 12;
let a: bigint = 12n;
// let a: bigint = 12.3n;

// console.log(a);

// let c: bigint = <bigint>12;
// let c: bigint = 12 as bigint;
let e: bigint = BigInt(12);

console.log("e=>", e);

console.log(11n / 3n);

console.log(
  "BigInt 9007199254740991 + 2",
  BigInt(Number.MAX_SAFE_INTEGER) + 2n
);

console.log("99999999999999999999n", 99999999999999999999n);
