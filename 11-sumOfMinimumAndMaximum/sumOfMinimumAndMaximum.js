function sumOfMinimumAndMaximum(nums) {
  // Variable declaration to give min and max base values
  let min = nums[0];
  let max = nums[0];
  // Iteration loop, replacing min and max as it finds appropriate values
  for(let i = 0, x = nums.length; i < x; i++){
    if(nums[i] < min) {
      min = nums[i];
    } else if(nums[i] > max){
      max = nums[i];
    }
  }
  return min + max;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;