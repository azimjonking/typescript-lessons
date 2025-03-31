"use strict";
// Typescript generic type
class List {
    constructor() {
        this.elements = [];
    }
    add(element) {
        this.elements.push(element);
    }
}
let list = new List();
list.add("Salom");
list.add("Dunyo");
list.add(12);
list.add(true);
console.log(list);
//# sourceMappingURL=index.js.map