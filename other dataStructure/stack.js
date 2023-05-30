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
        this.size = 0;
    }

    push(val) {
        var newNode = new Node(val)
        if (this.first === null) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size
    }
    pop() {
        if (this.size === 0) return null;
        var removedNode = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return removedNode.val

    }
}

var stack = new Stack()
console.log(stack.push(1))
console.log(stack.push(2))
console.log(stack.pop())
console.log(stack.pop())
// console.log(stack.pop())

console.log(stack)






