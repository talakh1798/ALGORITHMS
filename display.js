class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    // Method to add a new node to the front of the list
    addFront(value) {
        let newNode = new Node(value); 
        newNode.next = this.head; 
        this.head = newNode; 
        return this;
    }

    // Method to display all values in the linked list
    display() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}

let SLL1 = new SLL();
SLL1.addFront(76);
SLL1.addFront(2);
SLL1.display(); // Output: 2 76

SLL1.addFront(11.41);
SLL1.display(); // Output: 2 76 11.41
