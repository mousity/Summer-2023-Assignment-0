function pairSum(nums, target) {
  // Variable delcaration where the flag is set to false
  let isPair = false;

  // Throw an error if the array is less than two
  if(nums.length < 2){
    throw new Error("This is not a valid array length!");
  }

  // Nest arrays to iterate and add the earliest element to all the other elements and check to see if the sum is the target
  // "Outerloop" and "Innerloop" are labels so that "break" can break out of the proper for-loop when we reach it
  outerloop: for(let i = 0, x = nums.length; i < x; i++){
    innerloop: for(let j = (i + 1); j < x; j++) {
      
      // If a pair is found, set the flag to true
      if (nums[i] + nums[j] == target){
        isPair = true;
        // Breaks out of the outerloop, stopping all iteration
        break outerloop;
      }
    }
  }

  // Returns flag
  return isPair;
}

// Do not edit this line;
module.exports = pairSum;

