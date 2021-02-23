const DoubleLinkedList = require("./DoubleLinkedList");

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor(data) {
    this._queue = new DoubleLinkedList(data);
    this.first = this._queue.head;
    this.last = this._queue.tail;
    this.size = this._queue.length;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    this._queue.push(val);
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    return this._queue.shift();
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
