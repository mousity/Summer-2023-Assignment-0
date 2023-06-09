function cutInHalfAndFloor(num) {
  // If number is even, simply cut it in half
  if ((num % 2) == 0){
    return num / 2;
  // If number is odd, split in half and subtract 0.5 to round down
  } else {
    return (num / 2) - 0.5;
  }
}

// Do not edit this line;
module.exports = cutInHalfAndFloor;

