const arraySquared = (input) => input.map((el) => Math.pow(el, 2));
// const input = [1, 2, 3, 4, 5];

// method 01
// const result = input.map((el) => el * el);

// method 02
// const result = input.map((el) => Math.pow(el, 2));

// console.log(result); // [4, 9, 16, 25]
module.exports = arraySquared;
