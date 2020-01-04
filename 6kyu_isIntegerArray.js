/* 
Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}

- returns true / True if every element in an array is an integer or a float with no decimals.
- returns true / True if array is empty.
- returns false / False for every other input. 

Test.assertEquals(isIntArray([]), true, "Input: []");
Test.assertEquals(isIntArray([1, 2, 3, 4]), true, "Input: [1, 2, 3, 4]");
Test.assertEquals(isIntArray([1, 2, 3, NaN]), false, "Input: [1, 2, 3, NaN]");

*/

// checks for int
function checkInt(n) {
  return Number.isInteger(n);
}

function isIntArray(arr) {
  // check if input is an array
  if (!Array.isArray(arr)) {
    return false;
  }

  // check each element of array
  for (element of arr) {
    if (!checkInt(element)) {
      return false;
    }
  }
  return true;
}

console.log(isIntArray([]));
