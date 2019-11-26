// Who knows the nursery rhyme Ten Green Bottles?

// Lyrics:

// Ten green bottles hanging on the wall,
// Ten green bottles hanging on the wall,
// And if one green bottle should accidentally fall,
// There'll be nine green bottles hanging on the wall.

// Nine green bottles hanging on the wall,
// Nine green bottles hanging on the wall,
// And if one green bottle should accidentally fall,
// There'll be eight green bottles hanging on the wall. 

// Eight green bottles hanging on the wall...
// Seven green bottles hanging on the wall...
// ...

// One green bottle hanging on the wall,
// One green bottle hanging on the wall,
// If that one green bottle should accidentally fall,
// There'll be no green bottles hanging on the wall.
// Task
// Write some amazing code to reproduce the above lyrics starting from n green bottles!

// parameter n is 1 to 10
// newline terminates every line (including the last)
// don't forget the blank lines between the verses

function tenGreenBottles(n) {
    numbers = {
        0: 'no green bottles',
        1: 'One green bottle',
        2: 'Two green bottles',
        3: 'Three green bottles',
        4: 'Four green bottles',
        5: 'Five green bottles',
        6: 'Six green bottles',
        7: 'Seven green bottles',
        8: 'Eight green bottles',
        9: 'Nine green bottles',
        10: 'Ten green bottles'
    }

    let lyrics = "";
    const lastVerse =
        `${numbers[1]} hanging on the wall,\n` +
        `${numbers[1]} hanging on the wall,\n` +
        `If that ${numbers[1].toLowerCase()} should accidentally fall,\n` +
        `There'll be ${numbers[0]} hanging on the wall.\n`

    for (let i = n; i > 1; i--) {
        let verse =
            `${numbers[i]} hanging on the wall,\n` +
            `${numbers[i]} hanging on the wall,\n` +
            `And if one green bottle should accidentally fall,\n` +
            `There'll be ${numbers[i - 1].toLowerCase()} hanging on the wall.\n` + '\n'
        lyrics += verse
    };

    return lyrics += lastVerse;

};