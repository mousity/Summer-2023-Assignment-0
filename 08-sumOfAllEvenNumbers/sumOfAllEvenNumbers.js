function sumOfAllEvenNumbers(nums) {
  let count = 0;
  // For loop to iterate and add all even numbers in array
  for(let i = 0, x = nums.length; i < x; i++){
    if((nums[i] % 2) == 0){
      count++;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;

