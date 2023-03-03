const sumPositive = (input) =>
  input.filter((el) => el > 0).reduce((acc, el) => acc + el, 0);

// const input = [1, -4, 12, 0, -3, 29, -150];

// method 01
// const result = input.reduce((acc, el) => (el > 0 ? acc + el : acc), 0);

// method 02
// const result = input.filter((el) => el > 0).reduce((acc, el) => acc + el, 0);

// console.log(result); // 42

module.exports = sumPositive;
