const getHighPerforming = (array) => {
  let result = array.map((el) => {
    return {
      name: el.name,
      // round 2 decimals - Method 01 //parseFloat(num.toFixed(2))
      // average: parseFloat(
      //   (
      //     el.scores.reduce((acc, score) => acc + score, 0) / el.scores.length
      //   ).toFixed(2)
      // ),

      // round 2 decimals - Method 02 //Math.round(num * 100) / 100;
      average:
        Math.round(
          (el.scores.reduce((acc, score) => acc + score, 0) /
            el.scores.length) *
            100
        ) / 100,
    };
  });
  result = result.filter((el) => el.average > 90);
  return result;
};

// const students = [
//   { name: 'Alice', scores: [90, 85, 92] },
//   { name: 'Bob', scores: [75, 80, 85] },
//   { name: 'Charlie', scores: [90, 95, 85] },
//   { name: 'David', scores: [100, 100, 100] },
// ];

// console.log(getHighPerforming(students));

module.exports = getHighPerforming; //
