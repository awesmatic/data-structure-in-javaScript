function navieString(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < char.length; j++) {
            if (char[j] !== str[i + j]) {
                break
            }
            if (j === char.length - 1) {
                count++
            }
        }

    }
    return count
}

console.log(navieString('saurabh rauthan', 'au'));