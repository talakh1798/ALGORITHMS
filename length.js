class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null;
    }
    length(){
        let currentNode = this.head;
        let count = 0;
        while(currentNode){
            count++;
            currentNode = currentNode.next;
        }
        return count;
    }
}

let sll = new SLL();
sll.head = new Node(1);
let second = new Node(2);
let third = new Node(3);
sll.head.next = second;
second.next = third;
console.log(sll.length()); // Output: 3
