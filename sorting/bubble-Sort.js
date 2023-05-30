function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
            }
        }
    }
    return arr
}

console.log(bubbleSort([4, 7, 1, 66, 47, 41]));

// optimization 
function bubbleSort(arr) {
    let noSwap;
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    for (let i = arr.length; i > 0; i--) {
        noSwap = true
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
                noSwap = false
            }
        }
        if (noSwap) break
    }
    return arr
}

console.log(bubbleSort([4, 7, 1, 66, 47, 41]));