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

    // Validacion 1: es un numero?
    if (isNaN(parsed)) { return { error: 400, message: 'ID invalido '} };

    const product = this.getProductById(parsed);

    //Validacion 2: existe en la BD?
    if (!product) { return { error: 404, message: 'Producto no encontrado'} };

    return { id: parsed };

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

  },

  // Crear productos

  createProduct(data) {
    const stmt = db.prepare(`
      INSERT INTO products (name, category, image, points, description, featured)
      VALUES (?, ?, ?, ?, ?, ?)
    `);

    const result = stmt.run (
      data.name,
      data.category,
      data.image,
      data.points,
      data.description,
      data.featured ? 1 : 0
    );

    return this.getProductById(result.lastInsertRowid);
  },

  // Actualizar productos
  updateProduct(id, data) {
    const stmt = db.prepare(`
      UPDATE products
      SET name = ?, category = ?, image = ?, points = ?, description = ?, featured = ?
      WHERE id = ?
      `);

      stmt.run(
        data.name,
        data.category,
        data.image,
        data.points,
        data.description,
        data.featured ? 1 : 0,
        id
      );

      return this.getProductById(id);
  },

  // Eliminar productos
  deleteProduct(id) {
    const stmt = db.prepare(`DELETE FROM products WHERE id = ?`);
    return stmt.run(id);
  },

  // Contar productos
  countProducts() {
    const stmt = db.prepare(`SELECT COUNT(*) AS total FROM products`);
    return stmt.get().total;
  },

};

module.exports = productsService;