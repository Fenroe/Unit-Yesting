import reverseString from "./reverse-string";

it('Works!', () => {
  expect(reverseString('tset')).toBe('test');
});

it('Keeps spaces', () => {
  expect(reverseString('String with spaces')).toBe('secaps htiw gnirtS');
});