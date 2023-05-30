function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        var current = arr[i]
        console.log(i);
        for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
            console.log(j)
            arr[j + 1] = arr[j]
            console.log(arr);
        }
        arr[j + 1] = current
    }
    return arr
}

console.log(insertionSort([4, 8, 1, 3, 4, 9, 55]));