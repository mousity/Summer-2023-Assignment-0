class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    let start = 0;
    let end = nums.length;
    let middle; 

    while(start <= end){
      middle = Math.floor((start + end) / 2);

      if (nums[middle] == target){
        this.flag = true;
        break;
      }

      if (nums[middle] < target){
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }
    return this.flag;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;

