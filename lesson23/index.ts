// TypeScript - Nullish assignment vs chaining operator
// ?? - ?

// ?? - Nullish assignment
// null, undefined

// || - yoki
// false, 0, "", undefined, null

let a: number | null | undefined = null;

a = undefined;

a = 20;

// // let b = "" ?? 0;
// let b = "" || 0;

let b: number = a ?? 0;

console.log(b);

// =========================
// ?. - chaining operator

// const obj = {
//   user: {
//     name: "",
//     country: {
//       region: "",
//     },
//   },
// };

// const obj2 = {
//   user: {
//     name: "",
//     country: {
//       region: "",
//     },
//   },
// };

// console.log(obj.user?.country?.region); // undefined

function add(x: number, y: number, cb?: (v: number) => void): number {
  let natija: number = x + y;

  // if (cb) {
  //   cb(natija);
  // }

  cb?.(natija);

  return natija;
}

// const result: number = add(2, 3, (e) => console.log(">>>", e));

// console.log("result", result);

type Arr = ({ price: number } | null | undefined)[];

function calcProductPrice(arr: Arr): number {
  let s: number = 0;

  arr.forEach((item) => {
    s += item?.price ?? 0;
  });

  return s;
}

const result: number = calcProductPrice([
  { price: 1 },
  null,
  { price: 2 },
  undefined,
  { price: 3 },
  null,
  { price: 4 },
  undefined,
  { price: 5 },
]);

console.log("Result = ", result);
