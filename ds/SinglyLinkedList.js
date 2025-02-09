class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        if(this.isEmpty()) {
            this.head = new Node(val);
            this.tail = this.head;
        } else {
            this.tail.next = new Node(val);
            this.tail = this.tail.next;   
        }
        this.length++;
        
        return this;
    }

    pop() {
        if(this.isEmpty()) return undefined;
        let current = this.head;
        let prev = current;
        while(current.next) {
            current = current.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        
        return current;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (list.isEmpty()) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        
        return this;
    }

    shift() {
        if(this.isEmpty()) return undefined;
        let current = this.head;
        this.head = this.head.next;
        this.length--;
        return current;
    }

    get(index) {
        if(index < 0 || index > this.length || this.isEmpty()) return undefined;
        let i = 0;
        let current = this.head;
        while(i < index) {
            current = current.next;
            i++;
        }

        return current;
    }

    set(val, index) {
        let node = this.get(index);
        if(node) {
            node.val = val;    
        }
        
        return this;
    }

    insert(val, index) {
        if(index === 0) return this.unshift(val);
        if(index === length - 1) return this.push(val);

        if(this.isEmpty()) return undefined;

        let i = 0;
        let current = this.head;

        while(i < index-1) {
            current = current.next;
            i++;
        }

        let newNode = new Node(val);
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
        
        return this;
    }

    remove(index) {
        if(index === 0) return this.shift();
        if(index === length - 1) return this.pop();

        if(this.isEmpty()) return undefined;

        let i = 0;
        let current = this.head;

        while(i < index - 1) {
            current = current.next;
            i++;
        }

        let removed = current.next;
        current.next = removed.next;

        this.length--;
        return removed;
    }

    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let prev = null, current = temp, next;

        let i = 0;

        while(i < this.length) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
            i++;
        }

        return this;
    }

    isEmpty() {
        return this.length === 0;
    }
}

let list = new SinglyLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(60);
list.push(70);
list.push(80);      
list.push(90);