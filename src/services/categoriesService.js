const db = require("../db/database");


// obtener todas las categorías
function getAllCategories() {
    return db.prepare(
        "SELECT * FROM categories"
    ).all();
}


// obtener categoría por ID
function getCategoryById(id) {
    return db.prepare(
        "SELECT * FROM categories WHERE id = ?"
    ).get(id);
}


// crear categoría
function createCategory(name) {

    const result = db.prepare(
        `
        INSERT INTO categories (name)
        VALUES (?)
        `
    ).run(name);

    return getCategoryById(result.lastInsertRowid);
}


// actualizar categoría
function updateCategory(id, name) {

    db.prepare(
        `
        UPDATE categories
        SET name = ?
        WHERE id = ?
        `
    ).run(name, id);

    return getCategoryById(id);
}


// eliminar categoría
function deleteCategory(id) {

    return db.prepare(
        `
        DELETE FROM categories
        WHERE id = ?
        `
    ).run(id);
}


module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
};