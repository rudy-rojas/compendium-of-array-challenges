const arraySquared = require('./ArraySquared.js');

describe(`Array Squared Test`, () => {
  const input1 = [1, 2, 3, 4, 5];
  const result1 = [1, 4, 9, 16, 25];

  it(`${input1} should be ${result1}`, () => {
    expect(arraySquared(input1)).toEqual(result1);
  });

  const input2 = [];
  const result2 = [];
  it(`${input2} should be ${result2}`, () => {
    expect(arraySquared(input2)).toEqual(result2);
  });

  const input3 = [-1, -2, -3];
  const result3 = [1, 4, 9];
  it(`${input3} should be ${result3}`, () => {
    expect(arraySquared(input3)).toEqual(result3);
  });
});
