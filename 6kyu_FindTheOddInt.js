// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    let dupCount = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A.length; j++) {
            if (A[i] === A[j]) {
                dupCount++;
            };
        };
        if (dupCount % 2 !== 0) {
            return (A[i]);
        };
    };
    dupCount = 0;
};