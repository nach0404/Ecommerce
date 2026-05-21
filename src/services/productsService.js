const db = require('../db/database');

const productsService = {

  // Todos los productos
  getAllProducts() {

    const query = `
      SELECT * FROM products
    `;

    return db.prepare(query).all();

  },

  // Producto por id
  getProductById(id) {

    const query = `
      SELECT * FROM products
      WHERE id = ?
    `;

    return db.prepare(query).get(id);

  },

    // Normalizar id
  normalizeId(id) {

    const parsed = parseInt(id);

    return isNaN(parsed)
      ? null
      : parsed;

  },

    // Categorias
  getCategories() {

    const query = `
      SELECT DISTINCT category
      FROM products
    `;

    return db.prepare(query).all();

  },

  // Productos por categorias
  getProductByCategory(category) {

    const query = `
      SELECT * FROM products
      WHERE LOWER(category) = LOWER(?)
    `;

    return db.prepare(query).all(category);

  },

  // Buscar por nombre
  searchProducts(search) {

    const query = `
      SELECT * FROM products
      WHERE name LIKE ?
    `;

    return db.prepare(query).all(`%${search}%`);

  },

  // Ordenar por puntos
  getSortedProducts(order = 'ASC') {

    const query = `
      SELECT * FROM products
      ORDER BY points ${order}
    `;

    return db.prepare(query).all();

  },

  // Productos relacionados
  getRelatedProducts(id, category) {

    const query = `
      SELECT * FROM products
      WHERE category = ?
      AND id != ?
      LIMIT 4
    `;

    return db.prepare(query).all(category, id);

  },

  // Productos sugeridos
  getSuggestedProducts() {

    const query = `
      SELECT * FROM products
      LIMIT 5
    `;

    return db.prepare(query).all();

  },

  // Productos destacados
  getFeaturedProducts() {

    const query = `
      SELECT * FROM products
      WHERE featured = 1
      LIMIT 10
    `;

    return db.prepare(query).all();

  }

};

module.exports = productsService;