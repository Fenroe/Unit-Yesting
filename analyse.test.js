import analyse from "./analyse";

it('Returns average', () => {
  expect(analyse([2, 5, 8, 10]).average).toBe(6.25);
});

it('Returns min', () => {
  expect(analyse([2, 5, 8, 10]).min).toBe(2);
});

it('Returns max', () => {
  expect(analyse([2, 5, 8, 10]).max).toBe(10);
});

it('Returns length', () => {
  expect(analyse([2, 5, 8, 10]).length).toBe(4);
});

it('Works', () => {
  expect(analyse([2, 5, 8, 10])).toStrictEqual({ 
    average: 6.25, 
    min: 2, 
    max: 10, 
    length: 4 
  });
});

it('Only takes arrays', () => {
  expect(analyse(1, 2, 3)).toStrictEqual('Input not an array');
});

it('Parses strings', () => {
  expect(analyse(['1', '2', '3'])).toStrictEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3
  });
});

it('Only takes numbers', () => {
  expect(analyse(['one', 'two', 'three'])).toStrictEqual('Input can only include numbers');
});