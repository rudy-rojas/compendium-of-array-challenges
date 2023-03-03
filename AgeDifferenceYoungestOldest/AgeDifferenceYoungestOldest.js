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
  const min = Math.min(...input.map((el) => el.age));
  const max = Math.max(...input.map((el) => el.age));
  return [min, max, max - min];
};

const input = [
  {
    name: 'John',
    age: 13,
  },
  {
    name: 'Mark',
    age: 56,
  },
  {
    name: 'Rachel',
    age: 45,
  },
  {
    name: 'Nate',
    age: 67,
  },
  {
    name: 'Jennifer',
    age: 65,
  },
];

console.log(ageDifference(input));
