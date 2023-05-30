class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        var newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
            return this
        }
        var current = this.root;
        while (true) {
            if (val === current.val) return undefined;
            if (val < current.val) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                } else {
                    current = current.left
                }
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right
            }


        }
    }

    find(val) {
        if (!this.root) return false;
        var current = this.root.val
        var found = false
        while (current && !found) {
            if (val < current) {
                current = current.left
            } else if (val > current) {
                current = current.right
            } else {
                found = true
            }
        }
        if (!found) return undefined;
        return current
    }

    contains(val) {
        if (!this.root) return false;
        var current = this.root;
        var found = false;
        while (current & !false) {
            if (val < current) {
                current = current.left
            } else if (val > current) {
                current = current.right
            } else {
                return true;
            }
        }

        return false

    }
    // breath first search
    BFS() {
        var node = this.root;
        var queue = [];
        var result = [];
        queue.push(node)
        while (queue.length) {
            node = queue.shift();
            result.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return result
    }

    DFSPreOrder() {
        var data = []
        function traverse(node) {
            data.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return data
    }

    DFSPostOrder() {
        var data = [];
        var current = this.root;
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right)
            data.push(node.val)
        }
        traverse(current);
        return data
    }

    DFSInOrder() {
        var data = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.val);
            if (node.right) traverse(node.right);
        }
        traverse(this.root)
        return data;
    }
}
var bst = new BinarySearchTree()
bst.insert(10)
bst.insert(6)
bst.insert(15)
bst.insert(3)
bst.insert(8)
bst.insert(20)
console.log(bst.BFS())
console.log(bst.DFSPreOrder())
console.log(bst.DFSPostOrder())
console.log(bst.DFSInOrder())
10, 6, 15, 3, 8, 20









