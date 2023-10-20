// Implement a JavaScript function to find the sum of all elements in an array recursively.

function sumAllElements(arr) {
  result = 0;
  if (!arr.length) return result;
  return (result += arr.shift() + sumAllElements(arr));
}