// Define a method that accepts 2 strings as parameters. The method returns the first string sorted by the second.

// sortString("foos", "of")       => "oofs"
// sortString("string", "gnirts") => "gnirts"
// sortString("banana", "abn")    => "aaabnn"
// To elaborate, the second string defines the ordering. It is possible that in the second string characters repeat, so you should remove repeating characters, leaving only the first occurrence.

// Any character in the first string that does not appear in the second string should be sorted to the end of the result in original order.

function sortString(string, ordering) {
    const original = [...string]
    order = Array.from(new Set([...ordering])),
        newOrder = [];


    for (let i = 0; i < order.length; i++) {
        for (let j = 0; j < original.length; j++) {
            if (order[i] === original[j]) {
                newOrder.push(original[j]);
            }
        };
    }

    const notMatched = original.filter(x => {
        return !newOrder.includes(x);
    })

    return newOrder.concat(notMatched).join("");
};