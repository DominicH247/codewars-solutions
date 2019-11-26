// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
// Don't forget to rate this kata! Thanks :)

String.prototype.camelCase = function () {
    if (this.length > 1) {
        const string = this.split(" ");
        const cleaned = string.filter(el => el !== "")
        const applyCap = cleaned.map((element, i, cleaned) => {
            return element[0].slice(0, 1).toUpperCase() + cleaned[i].toString().slice(1);
        }).join("");
        return applyCap;
    } return "";
};