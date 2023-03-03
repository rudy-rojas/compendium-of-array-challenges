const getNameInitials = (str) =>
  str
    .split(' ')
    .map((el) => el.charAt(0))
    .join('');

// const input = 'George Raymond Richard Martin';

// console.log(getNameInitials(input)); // GRRM

module.exports = getNameInitials;

