const db = require("../db/database");


// obtener cantidad total de productos
function getTotalProducts() {

    const result = db.prepare(
        "SELECT COUNT(*) AS total FROM products"
    ).get();

    return result.total;

}


// obtener cantidad total de categorías
function getTotalCategories() {

    const result = db.prepare(
        "SELECT COUNT(*) AS total FROM categories"
    ).get();

    return result.total;

}


// obtener todas las métricas
function getStats() {

    return {
        totalProducts: getTotalProducts(),
        totalCategories: getTotalCategories()
    };

}


module.exports = {
    getStats
};