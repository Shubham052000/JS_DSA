// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;

    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = previous.next;

    while (node) {
      if (!node.next) {
        previous.next = null;
        return;
      }

      previous = node;
      node = node.next;
    }
  }

  insertLast(data) {
    const lastNode = this.getLast();
    if (lastNode) {
      lastNode.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(nodeIndex) {
    if (!this.head) {
      return null;
    }

    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === nodeIndex) {
        return node;
      }
      counter++;
      node = node.next;
    }

    return null;
  }

  removeAt(nodeIndex) {
    if (!this.head) {
      return;
    }

    if (nodeIndex === 0) {
      this.head = this.head.next;
      return;
    }

    let counter = 1;
    let prevNode = this.head;
    let node = this.head.next;

    while (node) {
      if (counter === nodeIndex) {
        prevNode.next = node.next;
        node.next = null;
      }
      counter++;
      prevNode = node;
      node = node.next;
    }
  }

  insertAt(data, nodeIndex) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (nodeIndex === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const prev = this.getAt(nodeIndex - 1) || this.getLast();
    prev.next = new Node(data, prev.next);
  }

  forEach(cb) {
    let node = this.head;
    let counter = 0;

    while (node) {
      cb(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
