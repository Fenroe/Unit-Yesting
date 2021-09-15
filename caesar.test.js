import encrypt from "./caesar";

it('Works', () => {
  expect(encrypt('test', 1)).toBe('uftu');
});

it('Goes Backwards', () => {
  expect(encrypt('uftu', -1)).toBe('test');
});

it('Loops forwards', () => {
  expect(encrypt('zebra', 1)).toBe('afcsb');
});

it('Loops backwards', () => {
  expect(encrypt('afcsb', -1)).toBe('zebra');
});

it('Handles large offsets', () => {
  expect(encrypt('large', 53)).toBe('mbshf');
});

it('Hands large negative offsets', () => {
  expect(encrypt('large', -53)).toBe('kzqfd');
});

it('Ignores symbols and letters', () => {
  expect(encrypt('ignore%%5', 2)).toBe('kipqtg%%5');
});

it('Is fine with spaces', () => {
  expect(encrypt('Has spaces', 1)).toBe('Ibt tqbdft');
});