const cartService = require('../services/cartService');

// Agregar producto al carrito
const addToCart = (req, res) => {
    const productId = parseInt(req.params.id);
    const result = cartService.addProduct(req.session, productId);

    if (result?.error) return res.status(404).send(result.error);

    res.redirect('/cart');
};

// Ver carrito
const getCart = (req, res) => {
    const cartItems = cartService.getCartItems(req.session);
    const total = cartService.getTotal(cartItems);

    res.render('pages/cart', { cartItems, total });
};

// Aumentar cantidad
const increaseQuantity = (req, res) => {
    cartService.increaseProduct(req.session, parseInt(req.params.id));
    res.redirect('/cart');
};

// Disminuir cantidad
const decreaseQuantity = (req, res) => {
    cartService.decreaseProduct(req.session, parseInt(req.params.id));
    res.redirect('/cart');
};

// Vaciar carrito
const clearCart = (req, res) => {
    cartService.clearCart(req.session);
    res.redirect('/cart');
};

module.exports = { addToCart, getCart, increaseQuantity, decreaseQuantity, clearCart };