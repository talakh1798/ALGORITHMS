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
    addFront(value){
        let newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        return this
    }
    removeFront(value){
        if (this.head === null) {
            return null;
        }
        // Move the head to the next node
        this.head = this.head.next;
        return this.head;  

    }
    front(){
        if (this.head === null) {
            return null;
        }
        return this.head.data;
    }
    
}

let SSL1 = new SLL()
console.log(SSL1.addFront(18));
// output SLL { head: Node { data: 18, next: null } }
console.log(SSL1.addFront(5));
// output SLL { head: Node { data: 5, next: Node { data:18 , next: null } }
console.log(SSL1.addFront(70));
// output SLL { head: Node { data: 70, next: Node { data: 5, next: Node { data: 18, next: null } } } }


console.log(SSL1.removeFront(70));
// output Node { data: 5, next: Node { data: 18, next: null } }
console.log(SSL1.removeFront(5));
// output Node { data: 18, next: null }

// console.log(SSL1.removeFront(18));
// output null

let SLL1 = new SLL();

SLL1.addFront(18);
console.log(SLL1.front()); // Output: 18

SLL1.removeFront();
console.log(SLL1.front());// Output: null

console.log(SLL1.front());// Output: null














