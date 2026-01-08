function removeDuplicates(arr) {
  let unique = [];

  for (let num of arr) {
    if (!unique.includes(num)) {
      unique.push(num);
    }
  }
  return unique;
}

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
// Run in terminal with: node p05-remove-duplicate.js
