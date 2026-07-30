const db = require('./database');

const categories = db.prepare(`
  SELECT * FROM categories
`).all();

console.log(categories);