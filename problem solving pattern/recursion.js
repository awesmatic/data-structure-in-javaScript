// 1st program of recursion

function countDown(num) {
    if (num <= 0) {
        console.log("its done")
        return
    }
    console.log(num)
    num--
    countDown(num)
}

countDown(5)

// second exmaple of recursive

function sumRange(num) {
    if (num === 1) return 1
    return num + sumRange(num - 1)
}

console.log(sumRange(4));

// factorial iteration

function factorial(num) {
    let total = 1;
    for (let i = num; i > 1; i--) {
        total *= i
    }
    return total
}
console.log(factorial(4))

// factorial recursive

function factorial(num) {
    if (num === 1) return 1
    return num * factorial(num - 1)
}

console.log(factorial(5))