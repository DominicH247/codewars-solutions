// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    const reg = /[aeiou]/g;
    let vowelCount = 0;

    if (reg.test(str)) {
        vowelCount = str.match(reg).length
        return vowelCount
    } else {
        return vowelCount
    };

};