const sumInRange = require('./sum');

test('There is a function named sumInRange', () => {
  expect(sumInRange);
})

test('Function handles empty array', () => {
  expect(sumInRange([], 1, 4)).toBe(null)
})

test('Function handles invalid type of lower limit', () => {
  expect(sumInRange([1,2,3,4], 'a', 5)).toBe(null)
})

test('Function handles invalid type of upper limit', () => {
  expect(sumInRange([1,2,3,4], 0, 'a')).toBe(null)
})

test('Finds the sum of numbers in a given range', () => {
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  let lowerLimit = 0;
  let upperLimit = 9;
  expect(sumInRange(array, lowerLimit, upperLimit)).toBe(55);
});