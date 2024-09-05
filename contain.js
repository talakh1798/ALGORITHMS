class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SLL{
    constructor(){
        this.head = null;
    }
    contain(value){
        let currentNode = this.head;
        while(currentNode){
            if(currentNode.value === value){
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

}

let sll = new SLL();
sll.head = new Node(1);
let second = new Node(2);
let third = new Node(3);
sll.head.next = second;
second.next = third;
console.log(sll.contain(2)); // true
console.log(sll.contain(3)); //true
console.log(sll.contain(4)); // false
console.log(sll.contain(5)); // false
