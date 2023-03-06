const getHighPerforming = require('./HighPerformingStudents.js');

const testing = (input, result) => {
  it(`${JSON.stringify(input)} should be ${JSON.stringify(result)}`, () => {
    expect(getHighPerforming(input)).toEqual(result);
  });
};

describe(`Getting high performing students Test`, () => {
  const students01 = [
    { name: 'Alice', scores: [90, 85, 92] },
    { name: 'Bob', scores: [75, 80, 85] },
    { name: 'Charlie', scores: [90, 95, 85] },
    { name: 'Jack', scores: [100, 100, 100] },
  ];
  const result01 = [{ name: 'Jack', average: 100 }];

  testing(students01, result01);

  const students02 = [
    { name: 'James Gosling', scores: [80, 90, 100] },
    { name: 'Rasmus Lerdorf', scores: [84, 100, 95] },
    { name: 'Brendan Eich', scores: [95, 98, 97] },
    { name: 'Bill Gates', scores: [70, 90, 65] },
    { name: 'Bjarne Stroustrup', scores: [85, 100, 70] },
  ];
  const result02 = [
    { name: 'Rasmus Lerdorf', average: 93 },
    { name: 'Brendan Eich', average: 96.67 },
  ];
  testing(students02, result02);
});
