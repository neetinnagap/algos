class Node {
    constructor(val) {
        this.left = null;
        this.right = null;
        this.val = val;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);
        if (this.root == null) {
            this.root = newNode;
        } else {
            let current = this.root;
            while (true) {
                if (val < current.val) {
                    if (current.left == null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (val > current.val) {
                    if (current.right == null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = this.root.right;
                    }
                }
            }
        }
        return this;
    }

    get(val) {
        let current = this.root;

        while(current) {
            if(val < current.val) {
                current = current.left;
            } else if (val > current.val) {
                current = current.right;
            } else {
                return current;
            }
        }

        return null;
    }

    remove(val) {
        if(val === this.root.val) {
            let node = this.root;
            this.root = null;
            return node;
        }
        
        let current = this.root;
        let parent = null;
        while(current) {
            if(val < current.val) {
                parent = current;
                current = current.left;
            } else if(val > current.val) {
                parent = current;
                current = current.right;
            } else {
                if(val < parent.val) {
                    parent.left = null
                    return current;
                } else if(val > parent.val) {
                    parent.right = null;
                    return current;
                }
            }
        }

        return null;
    }

    BFS() {
        let queue = [];
        let visited = [];

        queue.push(this.root);

        while(queue.length) {
            let current = queue.shift();
            visited.push(current.val);
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }

        return visited;
    }

    DFSPreOrder() {
        let visited = [];

        function traverse(node) {
            visited.push(node.val)    ;
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }

        traverse(this.root);
        
        return visited;
        
    }

    DFSPostOrder() {
        let visited = [];

        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            visited.push(node.val);
        }

        traverse(this.root);
        
        return visited;
    }

    DFSInOrder() {
        let visited = [];

        function traverse(node) {
            if(node.left) traverse(node.left)    ;
            visited.push(node.val);
            if(node.right) traverse(node.right);
        }

        traverse(this.root);
        
        return visited;
    }
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(3);
bst.insert(8);
bst.insert(15);
bst.insert(20);

// console.log("Get", bst.get(18));
console.log("Remove", bst.remove(8));
// console.log("BFS", bst.BFS());
// console.log("DFS Pre Order", bst.DFSPreOrder());
// console.log("DFS Post Order", bst.DFSPostOrder());
// console.log("DFS In Order", bst.DFSInOrder());