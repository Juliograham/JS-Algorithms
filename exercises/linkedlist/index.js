// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor (data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor () {
        this.head = null;
    }

    insertFirst (data) {
        this.insertAt(data, 0);
    }

    size () {
        let counter = 0;
        let node = this.head; 

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    getFirst () {
        return this.head;
    }

    getLast () {
        return this.getAt(this.size() - 1);
    }

    clear () {
        this.head = null;
    }

    removeFirst () {
        if (!this.head) {
            return;
        }      
        this.head = this.head.next;  
    }

    removeLast () {
        return this.removeAt(this.size() - 1);
    }

    insertLast (data) {
        if (this.head) {
            return this.getLast().next = new Node(data);
        }
        this.insertFirst(data);
    }

    getAt (index) {
        let count = 0;
        let node = this.head;

        while (node) {
            if (count === index) {
                return node;
            }
            count++;
            node = node.next;
        } 
        return null;
    }

    removeAt (index) {
        if (!this.head) {
            return null;
        }

        if (index === 0) {
            return this.head = this.head.next;            
        }

        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;
    }

    insertAt (data, index) {
        if (!this.head) {
            return this.head = new Node(data);
        }

        if (index === 0) {
            return this.head = new Node(data, this.head);
        }

        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
    }

    forEach (fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
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
