// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.items = [];
  }

  add(n) {
    return this.items.unshift(n);
  }

  remove() {
    return this.items.pop();
  }
}

module.exports = Queue;
