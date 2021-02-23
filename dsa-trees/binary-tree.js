/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(root = this.root) {
    if (!this.root) return 0
    if (!root.left && !root.right) return 1
    if (!root.left) return 1 + this.minDepth(root.right)
    if (!root.right) return 1 + this.minDepth(root.left)
    return Math.min(this.minDepth(root.left), this.minDepth(root.right)) + 1
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(root = this.root) {
    if (!root) return 0
    if (!root.left && !root.right) return 1
    if (!root.left) return 1 + this.minDepth(root.right)
    if (!root.right) return 1 + this.minDepth(root.left)
    return Math.max(this.minDepth(root.left), this.minDepth(root.right)) + 1
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum(root=this.root) {
    if (!root) return 0
    const leftSum = this.maxSum(root.left)
    const rightSum = this.maxSum(root.right)
    return Math.max(leftSum, rightSum) + root.val
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null
    let toVisit = [this.root]
    let nextLarger = null;
    while (toVisit.length) {
      const current = toVisit.shift()
      if (current.val > lowerBound) {
        nextLarger = nextLarger === null ? current.val : Math.max(nextLarger, current.val)
      }
      if (current.right) toVisit.push(current.right)
      if (current.left) toVisit.push(current.left)
    }
    return nextLarger
  }

}

module.exports = { BinaryTree, BinaryTreeNode };
