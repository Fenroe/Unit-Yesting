import analyse from "./analyse";

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