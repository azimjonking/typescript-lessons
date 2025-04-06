import { ID } from "./Utils";

interface IProduct {
  id: number;
  name: string;
  price: number;
}

class Product implements IProduct {
  readonly id: number;
  readonly name: string;
  readonly price: number;

  constructor(name: string, price: number) {
    this.id = ID.getNewId();
    this.name = name;
    this.price = price;
  }
}

export default Product;
