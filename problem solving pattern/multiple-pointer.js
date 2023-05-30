const findSum = (num) => {

    let left = 0;
    let right = num.length - 1;
    while (left < right) {
        let sum = num[left] + num[right]
        if (sum === 0) {
            return [num[left], num[right]]
        }
        if (sum > 0) {
            right--
        } else {
            left++
        }
    }
}

console.log(findSum([-4, -3, -2, -1, 0, 1, 2, 3, 5]))


// unique value counter

function countUniqueValue(arr) {
    if (arr.length === 0) {
        return 0
    }
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1

}
console.log(countUniqueValue([1, 1, 2, 3, 3, 5, 6, 7, 8]))