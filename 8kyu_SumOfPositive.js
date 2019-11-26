// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    // filter out negatives
    // reduce filtered array by adding the numbers
    // if array empty return 0, default value needed
    const filtered = arr.filter((item) => item > 0);
    const reduced = filtered.reduce((acc, val) => acc + val, 0);
    return reduced
};

