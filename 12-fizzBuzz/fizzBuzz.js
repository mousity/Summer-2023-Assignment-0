function fizzBuzz(start, end) {
  // Variable declaration. Creates a temporary (dynamic) array to return, and sets the length of the array as well as the starting number
  var arr = new Array();
  let num = start;
  let length = (end - start);

  // Iterates through for loop, tests for each number being divisible by 3, 5, or both
  for(let i = 0, x = length; i <= x; i++){
    if((num % 3 == 0) && (num % 5 == 0)){
      arr.push("FizzBuzz");
    } else if (num % 3 == 0) {
      arr.push("Fizz");
    } else if (num % 5 == 0) {
      arr.push("Buzz");
    } else {
      arr.push(num);
    }

    // Increment num to continue the pattern, return to beginning of loop
    num++;
  }
  // Returns the created array
  return arr;
}

// Do not edit this line;
module.exports = fizzBuzz;

