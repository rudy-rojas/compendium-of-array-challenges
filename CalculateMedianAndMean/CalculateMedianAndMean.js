const inputEven = [12, 46, 32, 64];
const inputOdd = [2, 11, 3, 8, 5, 10, 3];

const getMedianAndMean = (array) => {
  array.sort((a, b) => a - b);

  const mean = array.reduce((acc, el) => acc + el, 0) / array.length;
  const _half = parseInt(array.length / 2);
  const median =
    array.length % 2 == 0
      ? (array[_half - 1] + array[_half]) / 2
      : array[_half];
  return {mean:mean, median:median}
};

console.log(getMedianAndMean(inputEven)); // { mean: 38.5, median: 39 }
console.log(getMedianAndMean(inputOdd)); //{ mean: 6, median: 5 }
