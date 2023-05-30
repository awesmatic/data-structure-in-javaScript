// find odd values using helper method recursion

function findOdd(arr) {
    const result = []
    function checkOdd(arr) {
        if (arr.length === 0) {
            return
        }
        if (arr[0] % 2 !== 0) {
            result.push(arr[0])
        }
        checkOdd(arr.slice(1))
    }
    checkOdd(arr)
    return result
}

console.log(findOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]));