// Typescript generic type

// class List<T> {
//   elements: T[] = [];

//   add(element: T): void {
//     this.elements.push(element);
//   }
// }

// let list = new List<number | string>();

// list.add(12);
// list.add(23);
// list.add("asd");
// list.add("salom");

// console.log(list);

// let list2 = new List<boolean | undefined>();

// list2.add(undefined);
// list2.add(true);

interface IList<T> {
  elements: T[];
  add(element: T): void;
  // new (name: string, age: number): void;
}

type ListType = string | number | boolean;

class List implements IList<ListType> {
  elements: ListType[] = [];

  add(element: ListType): void {
    this.elements.push(element);
  }
}

let list = new List();

list.add("Salom");
list.add("Dunyo");
list.add(12);
list.add(true);

console.log(list);
