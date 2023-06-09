function sumOfNumsWithinARange(nums, start, end) {
  let count = 0;
  // For loop to iterate and add all numbers within parameters in array
  for(let i = 0, x = nums.length; i < x; i++){
    if(nums[i] <= end && nums[i] >= start){
      count++;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;

