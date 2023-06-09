function countOfAllIndexMatchingNumbers(nums) {
  let count = 0;
  // If index (i) is equal to actual value, increase count
  for(let i = 0, x = nums.length; i < x; i++){
    if(nums[i] == i){
      count++;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;

