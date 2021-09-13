function reverseString(string) {
  if (typeof string !== 'string') {
    return 'Input not a string';
  }
  let letters = string.split('');
  let newString = [];
  letters.forEach(letter => {
    newString.unshift(letter);
  })
  
  return newString.join('');
};

export default reverseString;