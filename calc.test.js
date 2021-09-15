import calc from "./calc";

it('Adds', () => {
  expect(calc(1, 3, '+')).toBe(4);
});

it('Subtracts', () => {
  expect(calc(5, 2, '-')).toBe(3);
});

it('Multiplies', () => {
  expect(calc(9, 4, '*')).toBe(36);
});

it('Divies', () => {
  expect(calc(16, 4, '/')).toBe(4);
});

it('Does not divide by zero', () => {
  expect(calc(5, 0, '/')).toBe('Cannot divide by zero');
});

it('Accepts strings', () => {
  expect(calc('5', '5', '+')).toBe(10);
});
