class Queue {
    constructor() {
        this._storage = {};
        this.length = 0;
        this.headIndex = 0;
    }
    enqeue(val) {
        let lastIndex = this.length + this.headIndex
        this._storage[lastIndex] = val;
        this.length++
    }
    deqeue() {
        let firstValue = this._storage[this.headIndex]
        delete this._storage[this.headIndex]
        this.length--
        this.headIndex++
        return firstValue
    }
}
let myQueue = new Queue()
myQueue.enqeue('zero')
myQueue.enqeue('one')
myQueue.deqeue()
myQueue.enqeue('three')
myQueue.deqeue()
console.log(myQueue)