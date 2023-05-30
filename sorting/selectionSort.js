function selectionSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    for (let i = 0; i < arr.length; i++) {
        const lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j
            }
        }
        if (i !== lowest) swap(arr, i, lowest)

    }
    return arr

}

console.log(selection([7, 11, 54, 1, 6, 97]));