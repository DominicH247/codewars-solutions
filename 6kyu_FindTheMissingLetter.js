// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

function findMissingLetter(array) {
    // iterate through array
    // compare the value of each letter to next letter in array
    // if next letter is != 1 along, then a letter is missing
    // missing letter is therefore current letter -1

    const lowerCase = array.map(x => x.toLowerCase());

    const alphabet = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6,
        g: 7, h: 8, i: 9, j: 10, k: 11, l: 12,
        m: 13, n: 14, o: 15, p: 16, q: 17, r: 18,
        s: 19, t: 20, u: 21, v: 22, w: 23, x: 24,
        y: 25, z: 26
    };

    //check if original array is upper case using IIFE
    const upperCase = (() => {
        return array[0] === array[0].toUpperCase() ? true : false
    })();

    // find missing letter
    for (let i = 0; i < lowerCase.length - 1; i++) {
        if (alphabet[lowerCase[i]] - alphabet[lowerCase[i + 1]] !== -1) {
            for (key in alphabet) {
                if (alphabet[key] === alphabet[lowerCase[i + 1]] - 1) {
                    return upperCase === true ? key.toUpperCase() : key
                }
            }
        }
    };

};