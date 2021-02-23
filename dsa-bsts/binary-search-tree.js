class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) { // check if root is null
      this.root = new Node(val)
      return this
    }
    let current = this.root
    while (current) {
      if (current.val <= val && current.right === null) {
        current.right = new Node(val)
        return this
      }
      if (current.val >= val && current.left === null) {
        current.left = new Node(val)
        return this
      }
      current = current.val < val ? current.right : current.left
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node=this.root) {
    if (this.root === null) {
      this.root = new Node(val)
      return this
    }
    if (node === null) {
      node = new Node(val)
      return this
    } 
    return node.val < val ? this.insertRecursively(val, node.right) : this.insertRecursively(val, node.left)
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root
    while (current) {
      if (current.val === val) return current
      current = current.val < val ? current.right : current.left
    }
    return undefined
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, root=this.root) {
    if (root === null) return undefined
    if (root.val === val) return root
    return root.val < val ? this.findRecursively(val, root.right) : this.findRecursively(val, root.left)
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node=this.root, visited=[]) {
    visited.push(node)
    if (node.left) this.dfsPreOrder(node.left, visited)
    if (node.right) this.dfsPreOrder(node.right, visited)
    return visited
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node=this.root, visited=[]) {
    if (node.left) this.dfsInOrder(node.left, visited)
    visited.push(node)
    if (node.right) this.dfsInOrder(node.right, visited)
    return visited
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node=this.node, visited=[]) {
    if (node.left) this.dfsPostOrder(node.left, visited)
    if (node.right) this.dfsPostOrder(node.right, visited)
    visited.push(node)
    return visited
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs(node=this.root, visited=[]) {
    let children = []
    if (node.left) {
      visited.push(node.left)
      children.push(node.left)
    }
    if (node.right) {
      visited.push(node.right)
      children.push(node.right)
    }
    for (let n of children) {
      this.bfs(n, visited)
    }
    return [this.root, ...visited]
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
