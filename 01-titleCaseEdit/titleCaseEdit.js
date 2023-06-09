function titleCaseEdit(title) {

  // Variable declaration for before string, the uppercase character, and the after string
  let before, after, letter;

  // For loop to iterate through the string
  for(let i = 0, x = title.length; i < x; i++){
    if(i == 0){
      // The first letter must always be capital and therefore this will always occur for the first letter. There is no "before" string
      letter = title.charAt(i).toUpperCase();
      after = title.slice(i + 1, x);
      // Combined the stores first capital letter with the sliced "after" string
      title = letter + after;
      // If the next letter is after a space, it must be capitalized
    } else if (title.charAt(i - 1) == " "){
      letter = title.charAt(i).toUpperCase();
      after = title.slice(i + 1, x);
      before = title.slice(0, i - 1);
      // Slice the before string, the stored capital letter, and the after string to replace the letter
      title = before + " " + letter + after;
    }
  }
  return title;
}

// Do not edit this line;
module.exports = titleCaseEdit;