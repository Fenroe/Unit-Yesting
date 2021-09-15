const lower = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
const upper = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

function manageOffset(letter, alphabet, offset) {
  let index = alphabet.indexOf(letter);
  index += offset % alphabet.length;
  if (index >= alphabet.length) {
    index -= alphabet.length;
  } 
  if (index < 0) {
    index += alphabet.length;
  }
  return alphabet[index];
}

function encrypt(message, offset) {
  let letters = message.split('');
  let encryptedLetters = letters.map(letter => {
    if (upper.includes(letter)) {
      return manageOffset(letter, upper, offset);
    }
    else if (lower.includes(letter)) {
      return manageOffset(letter, lower, offset);
    } else {
      return letter;
    }
  })
  return encryptedLetters.join('');
}

export default encrypt;