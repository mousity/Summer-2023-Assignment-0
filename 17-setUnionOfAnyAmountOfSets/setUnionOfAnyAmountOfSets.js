function setUnionOfAnyAmountOfSets(...args) {
  
  // Create a temporary set to return set unions
  const set = new Set();

  // For each set in ...args
  for(let i of args){
    // For each element in the set
    for(let j of i){
      // Add the next element in the set
      set.add(j);   // Properties of set objects are unique and we are in no danger of adding an element twice
    }
  }
  return set;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;

