export class ID {
  static id: number = 0;

  static getNewId(): number {
    return ++this.id;
  }
}
