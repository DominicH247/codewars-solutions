/* 
Write a sum function which will work properly when invoked using either syntax below.

  sum(2, 3);  // Outputs 5
sum(2)(3); // Outputs 5
HINT: use closures
 */

function sum(a, b) {
  return b === undefined ? b => a + b : a + b;
}
