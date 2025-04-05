"use strict";
// TypeScript - ! operator va foydalanuvchi ma'lumotlarini tekshirish
function calcWeightProducts(products) {
    let totalWeight = 0;
    products.forEach((product) => {
        totalWeight += product.weight;
    });
    return totalWeight;
}
const result = calcWeightProducts([
    { name: "Product 1", weight: 1 },
    { name: "Product 2", weight: 2 },
    { name: "Product 3", weight: 3 },
]);
console.log(result);
// ==================================
let a = null;
setTimeout(() => {
    a = 20;
}, 500);
setTimeout(() => {
    let b = a;
    console.log(b);
}, 1000);
// ==================================
// let s: string;
// console.log(s!);
// ==================================
class FrontendDeveloper {
    constructor() {
        this.isCreateRestApi = false;
    }
}
class BackendDeveloper {
    constructor() {
        this.isCreateRestApi = true;
    }
    createRestApi() { }
}
function isBackendDeveloper(developer) {
    return developer.isCreateRestApi;
}
function writeCode(developer) {
    // if (developer.isCreateRestApi) {
    //   developer.
    // }
    if (isBackendDeveloper(developer)) {
        developer.createRestApi();
    }
}
//# sourceMappingURL=index.js.map