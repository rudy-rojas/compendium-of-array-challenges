const sumPositive = require('./SumOfEveryPositiveElement.js');

const testing = (input, result) => {
  it(`[${input}] should be ${result}`, () => {
    expect(sumPositive(input)).toEqual(result);
  });
};

describe(`Sum only positives Test`, () => {
  testing([1, -4, 12, 0, -3, 29, -150], 42);
  testing([-2, -5, 0, -1, 1], 1);
  testing([], 0);
  testing(['a'], 0);
});
