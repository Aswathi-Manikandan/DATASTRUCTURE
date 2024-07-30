class DoublyNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Add a node at the beginning
    addAtBeginning(data) {
        const newNode = new DoublyNode(data);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    // Add a node at the end
    addAtEnd(data) {
        const newNode = new DoublyNode(data);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // Delete a node with the specified value
    deleteNode(data) {
        if (!this.head) return;
        if (this.head.data === data) {
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }
            return;
        }
        let current = this.head;
        while (current && current.data !== data) {
            current = current.next;
        }
        if (current) {
            if (current.next) {
                current.next.prev = current.prev;
            } else {
                this.tail = current.prev;
            }
            if (current.prev) {
                current.prev.next = current.next;
            }
        }
    }

    // Insert a node after a node with the specified value
    insertAfter(data, value) {
        let current = this.head;
        while (current && current.data !== value) {
            current = current.next;
        }
        if (current) {
            const newNode = new DoublyNode(data);
            newNode.next = current.next;
            newNode.prev = current;
            if (current.next) {
                current.next.prev = newNode;
            } else {
                this.tail = newNode;
            }
            current.next = newNode;
        }
    }

    // Insert a node before a node with the specified value
    insertBefore(data, value) {
        if (!this.head) return;
        if (this.head.data === value) {
            this.addAtBeginning(data);
            return;
        }
        let current = this.head;
        while (current && current.data !== value) {
            current = current.next;
        }
        if (current) {
            const newNode = new DoublyNode(data);
            newNode.prev = current.prev;
            newNode.next = current;
            if (current.prev) {
                current.prev.next = newNode;
            }
            current.prev = newNode;
        }
    }

    // Print all elements by order
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    // Print all elements in reverse order
    printReverse() {
        let current = this.tail;
        while (current) {
            console.log(current.data);
            current = current.prev;
        }
    }

    // Convert array to doubly linked list
    static fromArray(arr) {
        const list = new DoublyLinkedList();
        arr.forEach(data => list.addAtEnd(data));
        return list;
    }
}

// Example usage:
const dll = new DoublyLinkedList();
dll.addAtEnd(1);
dll.addAtEnd(2);
dll.addAtBeginning(0);
dll.insertAfter(1.5, 1);
dll.insertBefore(0.5, 1);

console.log('Doubly Linked List:');
dll.printList();  // 0, 0.5, 1, 1.5, 2
console.log('Reverse:');
dll.printReverse();  // 2, 1.5, 1, 0.5, 0

dll.deleteNode(1.5);
console.log('After deleting node with data 1.5:');
dll.printList();  // 0, 0.5, 1, 2

const dllFromArray = DoublyLinkedList.fromArray([1, 2, 3, 4, 5]);
console.log('Doubly Linked List from array:');
dllFromArray.printList();  // 1, 2, 3, 4, 5
console.log('Reverse:');
dllFromArray.printReverse();  // 5, 4, 3, 2, 1
