/** Node: node for a queue. */

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
      this.last = null;
    }
  }
  /**DoubleLinkedList: to use for queue */
  
  class DoubleLinkedList {
    constructor(vals = []) {
      this.head = null;
      this.tail = null;
      this.length = 0;
  
      for (let val of vals) this.push(val);
    }
  
    /** push(val): add new value to end of list. */
  
    push(val) {
      const newNode = new Node(val);
      newNode.last = this.tail;
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length += 1;
      return undefined;
    }
  
    /** pop(): return & remove last item. */
  
    pop() {
      const lastItem = this.tail;
      this.tail = lastItem.last;
      this.length -= 1;
      return lastItem;
    }
  
    /**shift(): remove and return first item */
    shift() {
      const firstItem = this.head;
      this.head = firstItem.next;
      this.length -= 1;
      return firstItem;
    }
  
}

module.exports = DoubleLinkedList;
  