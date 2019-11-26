// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr) {
    let dupCount = {};
    let key = 0;
    let value = 0;
    arr.forEach(item => dupCount[item] = (dupCount[item] || 0) + 1);

    for (num in dupCount) {
        if (dupCount[num] >= value) {
            value = dupCount[num];
            key = parseInt(num);
        }
    }
    return key;

}