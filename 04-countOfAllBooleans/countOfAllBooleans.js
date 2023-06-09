function countOfAllBooleans(arr) {
  let count = 0;
  // Iterates through array
  for(let i = 0, x = arr.length; i < x; i++){
    // The strict "===" operator must be used to confirm if an element is of type boolean
    if(arr[i] === true){
      count++;
    }
    if(arr[i] === false){
      count++;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleans;

