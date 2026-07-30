const db = require('./database');

// obtiene todas las categorías distintas de products
const categories = db.prepare(`
  SELECT DISTINCT category
  FROM products
  WHERE category IS NOT NULL
`).all();

// inserta las categorías en la tabla categories
const insert = db.prepare(`
  INSERT OR IGNORE INTO categories (name)
  VALUES (?)
`);

for (const category of categories) {
  insert.run(category.category);
}

console.log('Categorías migradas correctamente.');