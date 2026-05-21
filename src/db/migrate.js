const db = require('./database');

const products = require('../data/products');

const insertProduct = db.prepare(`
  INSERT OR IGNORE INTO products (
    id,
    name,
    category,
    image,
    points,
    description,
    featured
  )
  VALUES (?, ?, ?, ?, ?, ?, ?)
`);

products.forEach(product => {

  insertProduct.run(
    product.id,
    product.name,
    product.category,
    product.image,
    product.points,
    product.description,
    product.featured ? 1 : 0
  );

});

console.log('Productos migrados correctamente');