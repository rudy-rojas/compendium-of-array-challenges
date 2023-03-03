const factorial = require('./NWithMapAndReduce.js');

testing = (input, result) => {
  it(`${input} should be ${result}`, () => {
    expect(factorial(input)).toEqual(result);
  });
};

describe(`Factorial Test`, () => {
  testing(5, 120);
  testing(6, 720);
  testing(0, 1);
  testing(1, 1);
  testing(4, 24);
});
