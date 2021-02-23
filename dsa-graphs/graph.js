class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex)
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.addVertex(vertex)
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2)
    v2.adjacent.add(v1)
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2)
    v2.adjacent.delete(v1)
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    const adjacent = vertex.adjacent
    for (let node of adjacent) {
      node.adjacent.delete(vertex) // remove from all adjacent sets first
    }
    this.nodes.delete(vertex) // finally delete from this.nodes
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    const toVisitStack = [start]
    let seen = new Set(toVisitStack)
    let visited = []
    while (toVisitStack.length) {
      let current = toVisitStack.pop()
      visited.push(current)
      for (let node of current.adjacent) {
        if (!seen.has(node)) {
          toVisitStack.push(node)
          seen.add(node)
        }
      }
    }
    return visited
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    const toVisitQueue = [start]
    let seen = new Set(toVisitQueue)
    let visited = []
    while (toVisitQueue.length) {
      let current = toVisitQueue.shift()
      visited.push(current)
      for (let node of current.adjacent) {
        if (!seen.has(node)) {
          toVisitQueue.push(node)
          seen.add(node)
        }
      }
    }
    return visited
  }
}

module.exports = {Graph, Node}