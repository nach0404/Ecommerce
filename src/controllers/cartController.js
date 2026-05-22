const cartService = require('../services/cartService');
const productsService = require('../services/productsService');

// Agregar producto al carrito
const addToCart = (req, res) => {
    const result = productsService.normalizeId(req.params.id);
    if (result.error) return res.status(result.error).send(result.message);

    const cart = cartService.addProduct(req.session, result.id);
    if (cart?.error) return res.status(404).send(cart.error);

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
    const result = productsService.normalizeId(req.params.id);
    if (result.error) return res.status(result.error).send(result.message);

    cartService.increaseProduct(req.session, result.id);
    res.redirect('/cart');
};

// Disminuir cantidad
const decreaseQuantity = (req, res) => {
    const result = productsService.normalizeId(req.params.id);
    if (result.error) return res.status(result.error).send(result.message);

    cartService.decreaseProduct(req.session, result.id);
    res.redirect('/cart');
};

// Vaciar carrito
const clearCart = (req, res) => {
    cartService.clearCart(req.session);
    res.redirect('/cart');
};

module.exports = { addToCart, getCart, increaseQuantity, decreaseQuantity, clearCart };