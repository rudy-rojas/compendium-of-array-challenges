const countElements = (input) => {
  input = input.flat();
  return input.reduce((acc, el) => {
    if (el in acc) {
      acc[el]++;
    } else {
      acc[el] = 1;
    }
    return acc;
  }, {});
};

// const input = [
//   ['a', 'b', 'c'],
//   ['c', 'd', 'f'],
//   ['d', 'f', 'g'],
// ];

// console.log(countElements(input));

module.exports = countElements;