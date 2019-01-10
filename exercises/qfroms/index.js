// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor () {
        this.alpha = new Stack();
        this.bravo = new Stack();
    }
    
    add (record) {
        this.alpha.push(record);
    }

    peek () {
        while (!!this.alpha.peek()) {
            this.bravo.push(this.alpha.pop());
        }
        const peeked = this.bravo.peek();
        while (!!this.bravo.peek()) {
            this.alpha.push(this.bravo.pop());
        }
        return peeked;
    }

    remove () {
        while (!!this.alpha.peek()) {
            this.bravo.push(this.alpha.pop());
        }
        const removed = this.bravo.pop();
        while (!!this.bravo.peek()) {
            this.alpha.push(this.bravo.pop());
        }
        return removed;
    }
}

module.exports = Queue;
