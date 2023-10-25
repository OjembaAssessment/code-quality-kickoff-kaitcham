// Implement a JavaScript function to find the sum of all elements in an array recursively.

function sumAllElements(arr) {
  if (!arr.length) return 0;
  return arr.shift() + sumAllElements(arr);
}
