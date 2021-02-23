const DoubleLinkedList = require("./DoubleLinkedList");

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor(data) {
    this._stack = new DoubleLinkedList(data);
    this.first = this._stack.tail;
    this.last = this._stack.head;
    this.size = this._stack.length;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    this._stack.push(val);
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    return this._stack.pop();
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
