const products = require('../data/products');

// Todos los productos
const getAllProducts = () => products;

// Categorias unicas
const getCategories = () => [
    ...new Set(products.map(p => p.category))
];

// Producto por ID
const getProductById = (id) =>
    products.find(p => p.id === parseInt(id));

// Productos sugeridos (primeros 5)
const getSuggestedProducts = () =>
    products.slice(0, 5);

// Productos destacados (hasta 10)
const getFeaturedProducts = () =>
    products.filter(p => p.featured).slice(0, 10);

// Productos por categoria
const getProductByCategory = (category) =>
    products.filter(p => p.category.toLowerCase() === category.toLowerCase());

// Productos relacionados
const getRelatedProducts = (productId, category) =>
    products
    .filter(p => p.category === category && p.id !== parseInt(productId))
    .slice(0, 4);

module.exports = {
    getAllProducts,
    getCategories,
    getProductById,
    getSuggestedProducts,
    getFeaturedProducts,
    getProductByCategory,
    getRelatedProducts
};