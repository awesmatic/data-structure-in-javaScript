function findOdd(arr) {
    let result = []
    if (arr.length === 0) {
        return
    }
    if (arr[0] % 2 !== 0) {
        result.push(arr[0])
    }
    result = result.concat(findOdd(arr.slice(1)))
    return result
}

console.log(findOdd([1, 2, 3, 4, 5]));