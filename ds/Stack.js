class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.isEmpty()) {
            this.first = newNode;
            this.last = this.first;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        this.length++;
        return this.length;
    }

    pop() {
        if (this.isEmpty()) return undefined;
        let temp = this.first;
        this.first = this.first.next;
        this.length--;
        return temp;
    }

    isEmpty() {
        return this.length === 0;
    }
}

var stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);

stack.pop();
stack.pop();