const cartService = require('../services/cartService');
const { normalizeId } = require('../services/productsService');

// Agregar producto al carrito
const addToCart = (req, res) => {
    const productId = normalizeId(req.params.id);

    if (productId === null) return res.status(400).send('ID inválido');

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
    const productId = normalizeId(req.params.id);
    if (productId === null) return res.status(400).send('ID inválido');

    cartService.increaseProduct(req.session, productId);
    res.redirect('/cart');
};

// Disminuir cantidad
const decreaseQuantity = (req, res) => {
    const productId = normalizeId(req.params.id);
    if (productId === null) return res.status(400).send('ID inválido');

    cartService.decreaseProduct(req.session, productId);
    res.redirect('/cart');
};

// Vaciar carrito
const clearCart = (req, res) => {
    cartService.clearCart(req.session);
    res.redirect('/cart');
};

module.exports = { addToCart, getCart, increaseQuantity, decreaseQuantity, clearCart };