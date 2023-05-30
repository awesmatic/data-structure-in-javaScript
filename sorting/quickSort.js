function pivot(arr, start = 0, end = arr.length - 1) {
    function swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    let pivot = arr[start];
    let swapIdx = start

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i)
        }

    }
    swap(arr, start, swapIdx)
    console.log(arr);
    return swapIdx

}



function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIdx = pivot(arr, left, right)
        quickSort(arr, left, pivotIdx - 1)
        quickSort(arr, pivotIdx + 1, right)
    }
    return arr
}
console.log(quickSort([4, 1, 5, 8, 3, 7, 6, 2]));