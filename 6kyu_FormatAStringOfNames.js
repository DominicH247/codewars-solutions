// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.


const list = names => {
    return names.reduce((prev, current, index, array) => {
        if (index === 0) {
            return current.name;
        }
        else if (index === array.length - 1) {
            return `${prev} & ${current.name}`;
        }
        else {
            return `${prev}, ${current.name}`;
        }
    }, '');
}