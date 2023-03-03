const getMedianAndMean = require('./CalculateMedianAndMean.js');

testing = (input, result) => {
  it(`[${input}] should be ${JSON.stringify(result)}`, () => {
    expect(getMedianAndMean(input)).toEqual(result);
  });
};

describe(`Getting Median and Mean Test`, () => {
  testing([12, 46, 32, 64], { mean: 38.5, median: 39 });
  testing([], { mean: 0, median: 0 });
  testing([2, 11, 3, 8, 5, 10, 3], { mean: 6, median: 5 });
});
