const getNameInitials = require('./GetNameInitials.js');

describe('GetNameInitials Test', () => {
  it('James Gosling should be JG', () => {
    expect(getNameInitials('James Gosling')).toEqual('JG');
  });

  it('Lucianita Michelle Rojas Perez', () => {
    expect(getNameInitials('Lucianita Michelle Rojas Perez')).toEqual('LMRP');
  });

  it('Kevin Mitnick should be KM', ()=>{
    expect(getNameInitials('Kevin Mitknick')).toEqual('KM')
  })
});

