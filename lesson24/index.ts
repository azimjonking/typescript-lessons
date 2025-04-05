// TypeScript - ! operator va foydalanuvchi ma'lumotlarini tekshirish

interface IProduct {
  name: string;
  weight?: number;
}

function calcWeightProducts(products: IProduct[]): number {
  let totalWeight: number = 0;

  products.forEach((product) => {
    totalWeight += product.weight!;
  });

  return totalWeight;
}

const result: number = calcWeightProducts([
  { name: "Product 1", weight: 1 },
  { name: "Product 2", weight: 2 },
  { name: "Product 3", weight: 3 },
]);

console.log(result);

// ==================================
let a: number | undefined | null = null;

setTimeout(() => {
  a = 20;
}, 500);

setTimeout(() => {
  let b: number = a!;

  console.log(b);
}, 1000);

// ==================================
// let s: string;
// console.log(s!);

// ==================================

class FrontendDeveloper {
  isCreateRestApi: boolean = false;
}

class BackendDeveloper {
  isCreateRestApi: boolean = true;

  createRestApi() {}
}

function isBackendDeveloper(developer: any): developer is BackendDeveloper {
  return developer.isCreateRestApi;
}

function writeCode(developer: FrontendDeveloper | BackendDeveloper) {
  // if (developer.isCreateRestApi) {
  //   developer.
  // }

  if (isBackendDeveloper(developer)) {
    developer.createRestApi();
  }
}
