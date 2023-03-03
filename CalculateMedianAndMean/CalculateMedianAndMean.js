const getMedianAndMean = (array) => {
  array.sort((a, b) => a - b);

  const mean =
    array.length != 0
      ? array.reduce((acc, el) => acc + el, 0) / array.length
      : 0;
  const _half = parseInt(array.length / 2);
  const median =
    array.length != 0
      ? array.length % 2 == 0
        ? (array[_half - 1] + array[_half]) / 2
        : array[_half]
      : 0;
  return { mean: mean, median: median };
};

// const inputEven = [12, 46, 32, 64];
// const inputEven = [];
// const inputOdd = [2, 11, 3, 8, 5, 10, 3];

// console.log(getMedianAndMean(inputEven)); // {}
// console.log(getMedianAndMean(inputOdd)); //{ mean: 6, median: 5 }

module.exports = getMedianAndMean;
