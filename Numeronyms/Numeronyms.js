const numeronyms = (str) =>
  str
    .split(' ')
    .map((el) =>
      el.length > 3 ? `${el[0]}${el.length - 2}${el[el.length - 1]}` : el
    )
    .join(' ');

const input = 'Quis pariatur aliquip ad aliquip aliqua laboris minim aute veniam pariatur bye';
console.log(numeronyms(input));

module.exports = numeronyms;
