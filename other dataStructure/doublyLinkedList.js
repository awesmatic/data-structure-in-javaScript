class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail
            this.tail = newNode

        }

        this.length++
        return this
    }

    pop() {
        if (!this.head) return undefined
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode
    }
    shift() {
        if (this.length === 0) return undefined;
        var oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldhead.next;
            this.head.prev = null;
        }
        this.length--;
        return oldhead
    }

    unShift(val) {
        var newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return list
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        var count;
        var current
        if (index <= this.length / 2) {
            count = 0;
            current = this.head;
            while (index != count) {
                current = current.next;
                count++
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (index != count) {
                current = current.prev;
                count--
            }
        }
        return current
    }

}

let list = new DoublyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.pop()
list.pop()
list.pop()
list.pop()
console.log(list)




