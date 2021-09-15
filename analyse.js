function analyse(array) {
  if (!Array.isArray(array)) {
    return 'Input not an array';
  }
  if (array.some(isNaN)) {
    return 'Input can only include numbers';
  }
  array = array.map(number => {
    if(typeof number !== 'number') {
      return parseInt(number);
    } else {
      return number;
    }
  })
  const length = array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const total = array.reduce((a, b) => a + b);
  const average = (total / length);
  return { average, min, max, length }
}

export default analyse;