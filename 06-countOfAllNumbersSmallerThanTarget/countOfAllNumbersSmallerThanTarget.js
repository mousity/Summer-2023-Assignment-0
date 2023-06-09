function countOfAllNumbersSmallerThanTarget(nums, target) {
  let count = 0;
  // Iterates through array and increments count if the number is below the target
  for(let i = 0, x = nums.length; i < x; i++){
    if(nums[i] < target){
      count++;
    }
  }
  return count++;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
