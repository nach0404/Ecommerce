const productsService = require('./productsService');

// Obtener carrito crudo de la sesión
const getCart = (session) => session.cart || [];

// Agregar producto
const addProduct = (session, productId) => {
    const product = productsService.getProductById(productId);

    if (!product) return res.status(404).send("Producto no encontrado");
    if (product.stock === 0) return { error: 'Sin stock' };

    if (!session.cart) session.cart = [];

    const itemExistente = session.cart.find(i => i.productId === productId);

    if (itemExistente) {
        itemExistente.quantity += 1;
    } else {
        session.cart.push({ productId, quantity: 1 });
    }

    return { success: true };
};

// Aumentar cantidad
const increaseProduct = (session, productId) => {
    const item = session.cart?.find(i => i.productId === productId);
    if (item) item.quantity += 1;
};

// Disminuir cantidad
const decreaseProduct = (session, productId) => {
    if (!session.cart) return;

    const index = session.cart.findIndex(i => i.productId === productId);

    if (index !== -1) {
        session.cart[index].quantity -= 1;
        if (session.cart[index].quantity === 0) {
            session.cart.splice(index, 1);
        }
    }
};

// Vaciar carrito
const clearCart = (session) => {
    session.cart = [];
};

// Items enriquecidos con datos del producto
const getCartItems = (session) => {
    const cart = getCart(session);

    return cart.map(item => {
        const product = productsService.getProductById(item.productId);
        return {
            ...product,
            quantity: item.quantity,
            subtotal: product.points * item.quantity
        };
    });
};

// Total de puntos
const getTotal = (cartItems) =>
    cartItems.reduce((acc, item) => acc + item.subtotal, 0);

module.exports = {
    getCart,
    addProduct,
    increaseProduct,
    decreaseProduct,
    clearCart,
    getCartItems,
    getTotal
};