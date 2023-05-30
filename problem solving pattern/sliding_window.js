function maxSubArrSum(arr, num) {
    if (arr.length < num) {
        return null;
    }
    let max = 0;
    let temp = 0;
    for (i = 0; i < num; i++) {
        max += arr[i]
    }
    temp = max
    for (let j = num; j < arr.length; j++) {
        temp = temp - arr[j - num] + arr[j]
        max = Math.max(max, temp)
    }
    return max

}
console.log(maxSubArrSum([2, 6, 4, 1, 2, 3], 3));

// this program is to search which 3 number sum are greater in consicutive order