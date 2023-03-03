// Method 01
// const ageDifference = (input) => {
//   input.sort((a, b) => a.age - b.age);
//   const min = input[0].age;
//   const max = input[input.length-1].age;
//   const diff = max - min;
//   return [min, max, diff]
// };

//Method 02
const ageDifference = (input) => {
  const min = Math.min(...input.map((el) => el.age)) | 0;
  const max = Math.max(...input.map((el) => el.age)) | 0;
  return [min, max, max - min];
};

module.exports = ageDifference;
