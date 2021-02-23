/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let sum = 0;
    const toVisit = [];
    if (this.root) toVisit.push(this.root) // start at root
    while (toVisit.length) {
      const next = toVisit.shift();
      sum += next.val;
      for (let child of next.children) {
        toVisit.push(child)
      }
    }
    return sum
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let count = 0;
    const toVisit = [];
    if (this.root) toVisit.push(this.root)
    while (toVisit.length) {
      const next = toVisit.shift();
      if (next.val % 2 === 0) count += 1
      for (let child of next.children) {
        toVisit.push(child);
      }
    }
    return count
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let count = 0;
    const toVisit = [];
    if (this.root) toVisit.push(this.root)
    while (toVisit.length) {
      const next = toVisit.shift();
      if (next.val > lowerBound) count += 1
      for (let child of next.children) {
        toVisit.push(child)
      }
    }
    return count
  }
}

module.exports = { Tree, TreeNode };
