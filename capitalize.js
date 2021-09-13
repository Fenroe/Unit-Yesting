function capitalize(string) {
  if (typeof string !== 'string') {
    return 'Input not a string';
  }
  const newString = string[0].toUpperCase() + string.slice(1).toLowerCase();
  return newString;
}

export default capitalize;