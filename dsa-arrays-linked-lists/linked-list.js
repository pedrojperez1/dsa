/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
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

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (this.head) {
      const temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    } else {
      this.head = newNode
    }
    this.length += 1;
    return undefined;
  }

  /** pop(): return & remove last item. */

  pop() {
    let current = this.head;
    let last;
    while (current) {
      if (current === tail) {
        if (this.length = 1) {
          this.head = null;
          this.tail = null;
          this.length = 0;
        } else {
          last.next = null;
          return current;
        }
      } else {
        last = current;
        current = current.next;
      }
    }
    return undefined;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head) {
      const temp = this.head;
      this.head = this.head.next;
      this.length -= 1;
      return temp;
    }
    return undefined;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === idx) {
        return current;
      } else {
        current = current.next;
        count += 1;
      }
    }
    throw new Error("Invalid index provided.");
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let current = this.head;
    let count = 0;
    let last;
    while (current) {
      if (count === idx) {
        current.val = val;
        return undefined;
      } else {
        last = current;
        current = current.next;
        count += 1;
      }
    }
    throw new Error("Invalid index provided.");
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let current = this.head;
    let count = 0;
    let last;
    while (current) {
      if (count === idx) {
        const newNode = new Node(val);
        newNode.next = current;
        if (count > 0) {
          last.next = newNode;
        } else {
          this.head = newNode;
        }
        return undefined;
      } else {
        last = current;
        current = current.next;
        count += 1;
      }
    }
    throw new Error("Invalid index provided.");
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let current = this.head;
    let last;
    let count = 0;
    while (current) {
      if (count === idx) {
        if (count === 0) {
          this.head = null;
          this.tail = null;
          this.length = 0;
        } else {
          last.next = current.next;
          this.length -= 1;
          return current;
        }
      } else {
        last = current;
        current = current.next;
        count += 1;
      }
    }
    throw new Error("Invalid index provided.");
  }

  /** average(): return an average of all values in the list */

  average() {
    let current = this.head;
    let count = 0;
    let sum = 0;
    while (current) {
      sum += current.val;
      count += 1;
      current = current.next;
    }
    if (count === 0) return undefined;
    return sum / count;
  }
}

module.exports = LinkedList;
