function productOfAnyAmountOfNumbers(...args) {
  // Total variable starts at 1 because multiplying by 0 would make every result 0
  let total = 1;
  // for each parameter in ...args, multiply and add to total
  for (let i of args){
    total *= i;
  }
  return total;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;

