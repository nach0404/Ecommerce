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

// Normalizar y validar ID
const normalizeId = (id) => {
    const parsed = parseInt(id);
    return isNaN(parsed) ? null : parsed;
};

// Productos ordenados por puntos
const getSortedProducts = (sort) => {
    const sorted = [...products];

    if (sort === 'asc') {
        sorted.sort((a, b) => parseInt(a.points) - parseInt(b.points));
    } else if (sort === 'desc') {
        sorted.sort((a, b) => parseInt(b.points) - parseInt(a.points));
    }

    return sorted;
};

// Buscar productos por nombre
const searchProducts = (query) => {
    if(!query || query.trim() === '') return [];
    return products.filter(p => 
        p.name.toLocaleLowerCase().includes(query.toLocaleLowerCase().trim())
    );
};

module.exports = {
    getAllProducts,
    getCategories,
    getProductById,
    getSuggestedProducts,
    getFeaturedProducts,
    getProductByCategory,
    getRelatedProducts,
    normalizeId,
    getSortedProducts,
    searchProducts
};