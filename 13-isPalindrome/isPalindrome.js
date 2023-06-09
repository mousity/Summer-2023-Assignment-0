function isPalindrome(word) {

  // Variable declarations to extract and compare letters from each side of the string
  let letterOne, letterTwo;
  let backStart = word.length - 1;  // Initializes the back of the string, where we will start
  let comparisonCount = 0;          // We only need to iterate through half the array, so comparisonCount holds the amount of comparison we need to do

  let isPalindrome = true;          // Boolean flag
  
  // Sets the comparisonCount variable
  if(word.length % 2 == 0){
    comparisonCount = word.length / 2;
  } else {
    comparisonCount = word.length / 2 - 0.5;
  }

  // Iterates through half the string, rounded down, and compares letters on both ends
  for(let i = 0, x = comparisonCount; i < x; i++){
    letterOne = word.charAt(i);
    letterTwo = word.charAt(backStart);

    if(letterOne != letterTwo){
      isPalindrome = false;
      break;
    }
    // Decrement to have the position on the back of the string match the front of the string
    backStart--;
  }

  // Return the boolean flag
  return isPalindrome;
}

// Do not edit this line;
module.exports = isPalindrome;