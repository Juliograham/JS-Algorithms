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
        this.head = new Node(data, this.head);
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
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            return this.head = null;
        }

        let node = this.head;

        while (node) {            
            if (node.next && !node.next.next) {
                return node.next = null;
            }
            node = node.next;
        }
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

}

const testing = new LinkedList;
testing.insertFirst(4);
testing.insertFirst(3);
testing.insertFirst(2);
testing.insertFirst(1);
testing.size();
module.exports = { Node, LinkedList };
