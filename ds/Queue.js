class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue{
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if(this.isEmpty()) {
            this.first = newNode;
            this.last = this.first
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length++;
        return length;
    }

    pop() {
        if(this.isEmpty()) return undefined;
        if(this.length === 1) this.last = null;
        let temp = this.first;
        this.first = this.first.next;
        this.length--;
        return temp;
    }

    isEmpty() {
        return this.length === 0;
    }
}

let queue = new Queue();
queue.push(10);
// queue.push(20);
// queue.push(30);
// queue.push(40);
// queue.push(50);

queue.pop();
