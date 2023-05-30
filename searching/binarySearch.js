function binarySearch(arr, num) {
    // if (arr.length === 0) return -1
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((right + left) / 2)

    while (arr[middle] !== num && left <= right) {
        if (num < arr[middle]) {
            right = middle - 1

        } else {
            left = middle + 1
        }
        middle = Math.floor((left + right) / 2)
    }
    return arr[middle] === num ? middle : -1
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6))