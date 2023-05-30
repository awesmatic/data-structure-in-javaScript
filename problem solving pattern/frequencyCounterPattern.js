// for numbers

const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false
    }

    let arr1Elements = {}
    let arr2Elements = {}
    for (let item of arr1) {
        arr1Elements[item] = (arr1Elements[item] || 0) + 1
    }
    for (let item of arr2) {
        arr2Elements[item] = (arr2Elements[item] || 0) + 1
    }
    console.log(arr1Elements);
    console.log(arr2Elements);

    for (let item in arr1Elements) {
        // console.log(item);
        if (!(item ** 2 in arr2Elements)) {
            return false
        }
        if (arr2Elements[item ** 2] !== arr1Elements[item]) {
            return false
        }
        console.log(arr2Elements[item ** 2]);
        console.log(arr1Elements[item]);

    }
    return true

}

same([1, 2, 3, 2, 3, 2, 4], [1, 4, 4, 9, 4, 16, 9])


// for anagrams

const validAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false
    }
    let firstObj = {}
    let secondObj = {}

    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i]
        firstObj[letter] ? firstObj[letter] += 1 : firstObj[letter] = 1
    }
    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i]
        if (!firstObj[letter]) {
            return false
        } else {
            firstObj[letter] -= 1
        }

    }

    return true
}

console.log(validAnagram('aag', 'gaa'));
