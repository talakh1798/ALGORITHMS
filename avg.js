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
    max(){
        let currentNode = this.head;
        let max = currentNode.value;
        while(currentNode){
            if(currentNode.value > max){
                max = currentNode.value;
            }
            currentNode = currentNode.next;
        }
        return max;
    }
    min(){
        let currentNode = this.head;
        let min = currentNode.value;
        while(currentNode){
            if(currentNode.value < min){
                min = currentNode.value;
            }
            currentNode = currentNode.next;
        }
        return min;
    }
    avg(){
        let currentNode = this.head;
        let sum = 0;
        let count = 0;
        while(currentNode){
            sum += currentNode.value;
            count++;
            currentNode = currentNode.next;
        }
        return sum / count;
    }

}

let sll = new SLL();
sll.head = new Node(10);
let second = new Node(20);
let third = new Node(30);
sll.head.next = second;
second.next = third;
console.log(sll.max()); // Output: 30
console.log(sll.min()); // Output: 10
console.log(sll.avg()); // Output: 20
