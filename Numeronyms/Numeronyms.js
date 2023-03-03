const numeronyms = (str) =>
  str
    .split(' ')
    .map((el) =>
      el.length > 3 ? `${el[0]}${el.length - 2}${el[el.length - 1]}` : el
    )
    .join(' ');

const input = 'Every developer likes to mix kubernetes and javascript';
console.log(numeronyms(input));
