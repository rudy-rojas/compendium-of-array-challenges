const productCategories = require('./HighPricedProductCategories.js');

const testing = (input, result) => {
  it(`${input} should be ${result}`, () => {
    expect(productCategories(input)).toEqual(result);
  });
};
describe(`Get High Priced Product of Categories Test`, () => {
  const products = [
    { name: 'Product 1', price: 20, category: 'Electronics' },
    { name: 'Product 2', price: 30, category: 'Clothes' },
    { name: 'Product 3', price: 40, category: 'Electronics' },
    { name: 'Product 4', price: 50, category: 'Clothes' },
    { name: 'Product 5', price: 60, category: 'Clothes' },
    { name: 'Product 6', price: 70, category: 'Electronics' },
    { name: 'Product 7', price: 80, category: 'Clothes' },
    { name: 'Product 8', price: 90, category: 'Electronics' },
  ];
  const result = [
    { category: 'Electronics', average: 55 },
    { category: 'Clothes', average: 55 },
  ];
  testing(products, result);
});
