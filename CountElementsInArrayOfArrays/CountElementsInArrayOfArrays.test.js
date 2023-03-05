const countElements = require('./CountElementsInArrayOfArrays.js');

const testing = (input, result) => {
  it(`${input} should be ${result}`, () => {
    expect(countElements(input)).toEqual(result);
  });
};

describe(`Counting elements in Array of Array Test`, () => {
  testing(
    [
      ['a', 'b', 'c'],
      ['c', 'd', 'f'],
      ['d', 'f', 'g'],
    ],
    { a: 1, b: 1, c: 2, d: 2, f: 2, g: 1 }
  );

  testing(
    [
      ['James', 'Tom', 'Mary'],
      ['Tom', 'Carly', 'Lucianita'],
      ['Tom', 'Mary', 'Carly'],
    ],
    { James: 1, Mary: 2, Tom: 3, Carly: 2, Lucianita: 1 }
  );
});
