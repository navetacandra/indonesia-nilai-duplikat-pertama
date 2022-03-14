function firstDuplicateValue(array) {
  // Write your code here
  if(!array[0]) {
    return -1;
  }

  let dupe = [];
  let arr = [];
  array.forEach(v => {
    if(arr.includes(v)) dupe.push(v);
    arr.push(v);
  })
  let firstDuplicated = dupe[0] || -1;
  return firstDuplicated;
}

// dont change the code below
exports.firstDuplicateValue = firstDuplicateValue;