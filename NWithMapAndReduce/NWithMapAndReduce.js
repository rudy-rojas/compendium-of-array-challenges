const factorial = (num) => {
  let array = new Array(num);
  array.fill(0);
  return array.map((el, i) => i + 1).reduce((acc, el) => acc * el, 1);
};

// const input = 6;

// console.log(factorial(input)); // 720

module.exports = factorial;
