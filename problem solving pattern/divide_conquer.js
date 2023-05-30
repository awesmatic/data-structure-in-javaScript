// program to search the index of given num in a sorted array

//1. linear search with O(N) TC

// function search(arr, num) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === num) {
//             return i
//         }
//     }
//     return -1
// }



// 2. binary search log(N) TM

function search(arr, num) {
    let min = 0;
    let max = arr.length - 1
    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];

        if (currentElement < num) {
            min = middle + 1
        } else if (currentElement > num) {
            max = middle - 1
        } else {
            return middle
        }
    }
    return -1
}

console.log(search([1, 2, 3, 4, 5, 6], 3))