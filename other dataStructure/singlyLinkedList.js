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
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1
        return this;

    }

    pop() {
        if (this.length === 0) {
            return undefined
        }
        var current = this.head
        var newTail = current
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;

    }

    shift() {
        if (this.head === null) return undefined;
        let current = this.head;
        this.head = current.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return current

    }

    unShift(val) {
        let newNode = new Node(val)
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length += 1;
        return this
    }
    get(index) {
        let counter = 0;
        let current = this.head
        if (index < 0 || index >= this.length) {
            return null
        }
        while (index !== counter) {
            current = current.next;
            counter++
        }
        return current
    }

    set(idx, val) {
        let value = this.get(idx)
        if (value) {
            value.val = val
            return true
        }
        return false
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false
        if (index === this.length) {
            return !!this.push(val)
        }
        if (index === 0) {
            return !!this.unShift(val)
        }
        let newNode = new Node(val)
        let value = this.get(index - 1)
        let temp = value.next
        value.next = newNode;
        newNode.next = temp;
        this.length++;
        return true
    }

    remove(idx) {
        if (idx < 0 || idx >= this.length) {
            return null
        }
        if (idx === 0) {
            return this.shift()
        }
        if (idx === this.length - 1) {
            return this.pop()
        }
        let prev = this.get(idx - 1)
        let removed = prev.next
        prev.next = removed.next
        this.length--
        return removed
    }

    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next
        }
        return this
    }
}

let list = new SinglyLinkedList()

list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)

list.reverse()


console.log(list)