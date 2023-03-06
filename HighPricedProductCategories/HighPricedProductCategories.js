const productCategories = (products) => {
  let categories = products.map((el) => el.category);
  let category = categories.filter((el, i) => categories.indexOf(el) === i);
  return category.map((el) => {
    return {
      category: el,
      average: parseFloat(
        products.reduce(
          (acc, prod) => (el == prod.category ? acc + prod.price : acc),
          0
        ) / categories.reduce((acc, cat) => (cat == el ? acc + 1 : acc), 0)
      ),
    };
  });
};

// INPUT
// const products = [
//   { name: 'Product 1', price: 20, category: 'Electronics' },
//   { name: 'Product 2', price: 30, category: 'Clothes' },
//   { name: 'Product 3', price: 40, category: 'Electronics' },
//   { name: 'Product 4', price: 50, category: 'Clothes' },
//   { name: 'Product 5', price: 60, category: 'Clothes' },
//   { name: 'Product 6', price: 70, category: 'Electronics' },
//   { name: 'Product 7', price: 80, category: 'Clothes' },
//   { name: 'Product 8', price: 90, category: 'Electronics' },
// ];

// RESULT
// [
//   { category: 'Clothes', average: 55 },
//   { category: 'Electronics', average: 55 },
// ];



// console.log(productCategories(products));
module.exports = productCategories;