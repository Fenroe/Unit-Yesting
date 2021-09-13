import capitalize from './capitalize';

it('example', () => {
  expect(capitalize('Example')).toBe('Example');
});

it('All lower case', () => {
  expect(capitalize('lower')).toBe('Lower');
});

it('All upper case', () => {
  expect(capitalize('UPPER')).toBe('Upper');
});

it('Random order 1', () => {
  expect(capitalize('RaNdOm')).toBe('Random');
});

it('Random order 2', () => {
  expect(capitalize('rAnDoM')).toBe('Random');
});

it('Has spaces', () => {
  expect(capitalize('this string has spaces')).toBe('This string has spaces');
});

it('Not a string', () => {
  expect(capitalize(0)).toBe('Input not a string');
});