const numeronyms = require('./Numeronyms.js')

describe(`Numeronyms test`,()=>{
  const input1 = 'Every developer likes to mix kubernetes and javascript';
  const result1 = 'E3y d7r l3s to mix k8s and j8t'
  it(`${input1} should be ${result1}`,()=>{
    expect(numeronyms(input1)).toEqual(result1)
  })  

  const input2 = 'Quis pariatur aliquip ad aliquip aliqua laboris minim aute veniam pariatur bye'
  const result2 = 'Q2s p6r a5p ad a5p a4a l5s m3m a2e v4m p6r bye'
  it(`${input2} should be ${result2}`,()=>{
    expect(numeronyms(input2)).toEqual(result2)
  })
})