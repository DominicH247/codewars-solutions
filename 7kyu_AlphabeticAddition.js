// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.

// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'
// Examples:
// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z'

function addLetters(...letters) {
    let alphabet = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g',
        'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u',
        'v', 'w', 'x', 'y', 'z'];

    let query = [...letters];
    let total = [];
    let sum;

    // push value of each letter into total
    for (let i = 0; i < query.length; i++) {
        total.push(alphabet.indexOf(query[i]) + 1);
    }

    //calculate value of the letter by summing the total
    if (query.length > 0) {
        sum = total.reduce((a, b) => a + b)
        // return the corrosponding letters based on the sum value
        if (sum <= 26) {
            return alphabet[sum - 1];
            // if over 26 get remainder
        } else if (sum % 26 === 0) {
            return 'z'
        } else {
            return alphabet[(sum % 26) - 1];
        }
    } else {
        return 'z';
    };


}