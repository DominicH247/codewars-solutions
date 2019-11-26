// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

function sortArray(array) {
    const odds = [];
    const evens = [];
    const sortedOdds = [];

    // seperate odds from evens
    array.forEach(item => {
        return item % 2 !== 0 ? odds.push(item) : evens.push(item);
    });

    // sort odds
    odds.sort((a, b) => a - b);

    // shift odds and evens into sortedOdds
    array.forEach(item => {
        return item % 2 !== 0 ? sortedOdds.push(odds.shift()) : sortedOdds.push(evens.shift());
    });

    return sortedOdds;
};