// Javascript function to check level of nesting in an array and flatten it

const checkLevelsOfNesting = arr => arr.join('').match(/,/g).length;

function flattenArray(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.flat(checkLevelsOfNesting(arr));
}
