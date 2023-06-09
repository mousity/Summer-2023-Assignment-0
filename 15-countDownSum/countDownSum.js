class MySolution {

  total = 0;

  countDownSum(num) {

    // If num is more than one, continue adding all values
    if(num > 1){
      this.total += num;
      this.countDownSum(num - 1);
    } 
    // When we reach 1, add the last increment to the number
    if (num == 1){
      this.total += 1;
    } 

    // Returns total
    return this.total;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;

