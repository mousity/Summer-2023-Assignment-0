function frequencyCounter(word) {
  
  // Construct and epty object to store upcoming key-value pairs
  let obj = {};

  // For loop to iterate through the string
  for(let i = 0, x = word.length; i < x; i++){

    // If obj.key exists, simply add one to the existing value
    if(obj[word[i]]){
      obj[word[i]] += 1;

    // If obj.ket does not exist, initialize it and give it the value of 1
    } else {
      obj[word[i]] = 1;
    }
  }

  // Return object with finished key value pairs that reflect the frequency of letters
  return obj;
}

// Do not edit this line;
module.exports = frequencyCounter;

