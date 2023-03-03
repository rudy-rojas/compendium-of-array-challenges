const ageDifference = require('./AgeDifferenceYoungestOldest.js');

describe(`AgeDifferenceYoungestOldest Test`, () => {
  const input1 = [
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
  const result1 = [13, 67, 54];
  it(`${input1} should be ${result1}`, () => {
    expect(ageDifference(input1, result1)).toEqual(result1);
  });

  const input2 = [
    {
      name: 'Tom Hanks',
      age: 60,
    },
    {
      name: 'Ellie Goulding',
      age: 37,
    },
  ];

  const result2 = [37, 60, 23];

  it(`${input2} should be ${result2}`, () => {
    expect(ageDifference(input2)).toEqual(result2);
  });

  const input3 = [
    {
      name: 'Brendan Eich',
      age: 61,
    },
  ];
  const result3 = [61, 61, 0];
  it(`${input3} should be ${result3}`, () => {
    expect(ageDifference(input3)).toEqual(result3);
  });

  const input4 = [];
  const result4 = [0, 0, 0];
  it(`${input4} should be ${result4}`, () => {
    expect(ageDifference(input4)).toEqual(result4);
  });
});
