function countOfAllBooleansAndStrings(arr) {
  let count = 0;
  // uses "typeof" to confirm is element at array is string or boolean
  for(let i = 0, x = arr.length; i < x; i++){
    if(typeof arr[i] == 'boolean' || typeof arr[i] == 'string'){
      count ++;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;

