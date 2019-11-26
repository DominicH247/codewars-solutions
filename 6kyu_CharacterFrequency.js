// Write a function that takes a piece of text in the form of a string and returns the letter frequency count for the text. This count excludes numbers, spaces and all punctuation marks. Upper and lower case versions of a character are equivalent and the result should all be in lowercase.

// The function should return a list of tuples (in Python and Haskell) or arrays (in other languages) sorted by the most frequent letters first. The Rust implementation should return an ordered BTreeMap. Letters with the same frequency are ordered alphabetically. For example:

//   letterFrequency('aaAabb dddDD hhcc')
// will return

//   [['d',5], ['a',4], ['b',2], ['c',2], ['h',2]]
// Letter frequency analysis is often used to analyse simple substitution cipher texts like those created by the Caesar cipher.

function letterFrequency(text) {
    const arr = text.toLowerCase().replace(/[^a-z]/gi, "").split("").filter(x => x !== "");
    const newArr = Object.entries(arr.reduce((a, b) => {
        return a[b] = (a[b] || 0) + 1, a
    }, {}));

    return newArr.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

};