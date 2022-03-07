export class Stack {
  top: number;
  items: any;
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(value: any) {
    this.top += 1;
    this.items[this.top] = value;
  }

  get pop() {
    let item = this.items[this.top];
    delete this.items[this.top];
    this.top -= 1;
    return item;
  }
}