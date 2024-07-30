class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    // Add a node at the beginning
    addAtBeginning(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Add a node at the end
    addAtEnd(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Delete a node with the specified value
    deleteNode(data) {
        if (!this.head) return;
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next && current.next.data !== data) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
        }
    }

    // Insert a node after a node with the specified value
    insertAfter(data, value) {
        let current = this.head;
        while (current && current.data !== value) {
            current = current.next;
        }
        if (current) {
            const newNode = new Node(data);
            newNode.next = current.next;
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
        while (current.next && current.next.data !== value) {
            current = current.next;
        }
        if (current.next) {
            const newNode = new Node(data);
            newNode.next = current.next;
            current.next = newNode;
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

    // Print all elements in reverse order (using recursion)
    printReverse(node = this.head) {
        if (!node) return;
        this.printReverse(node.next);
        console.log(node.data);
    }

    // Convert array to linked list
    static fromArray(arr) {
        const list = new SinglyLinkedList();
        arr.forEach(data => list.addAtEnd(data));
        return list;
    }

    // Remove duplicates from a sorted linked list
    removeDuplicates() {
        let current = this.head;
        while (current && current.next) {
            if (current.data === current.next.data) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
    }
}

// Example usage:
const sll = new SinglyLinkedList();
sll.addAtEnd(1);
sll.addAtEnd(2);
sll.addAtBeginning(0);
sll.insertAfter(1.5, 1);
sll.insertBefore(0.5, 1);

console.log('Singly Linked List:');
sll.printList();  // 0, 0.5, 1, 1.5, 2
console.log('Reverse:');
sll.printReverse();  // 2, 1.5, 1, 0.5, 0

sll.deleteNode(1.5);
console.log('After deleting node with data 1.5:');
sll.printList();  // 0, 0.5, 1, 2

const sllFromArray = SinglyLinkedList.fromArray([1, 2, 2, 3, 3, 4]);
sllFromArray.removeDuplicates();
console.log('Sorted Singly Linked List after removing duplicates:');
sllFromArray.printList();  // 1, 2, 3, 4
