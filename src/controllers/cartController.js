const productsService = require('../services/productsService')

// Agregar producto al carrito
const addToCart = (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);

    if (!product) return res.status(404).send("Producto no encontrado");

    // Validar stock
    if (product.stock === 0) return res.redirect('/cart');

    if (!req.session.cart) req.session.cart = [];

    const itemExistente = req.session.cart.find(item => item.productId === productId);

    if (itemExistente) {
        itemExistente.quantity += 1;
    } else {
        req.session.cart.push({ productId, quantity: 1 });
    }

    res.redirect('/cart');
};

// Ver carrito
const getCart = (req, res) => {
    const cart = req.session.cart || [];

    const cartItems = cart.map(item => {
        const product = products.find(p => p.id === item.productId);
        return {
            ...product,
            quantity: item.quantity,
            subtotal: product.points * item.quantity
        };
    });

    const total = cartItems.reduce((acc, item) => acc + item.subtotal, 0);

    res.render('pages/cart', { cartItems, total });
};

// Aumentar cantidad
const increaseQuantity = (req, res) => {
    const productId = parseInt(req.params.id);
    const item = req.session.cart.find(i => i.productId === productId);
    if (item) item.quantity += 1;
    res.redirect('/cart');
};

// disminuir cantidad
const decreaseQuantity = (req, res) => {
    const productId = parseInt(req.params.id);
    const index = req.session.cart.findIndex(i => i.productId === productId);

    if (index !== -1) {
        req.session.cart[index].quantity -= 1;
        if (req.session.cart[index].quantity === 0) {
            req.session.cart.splice(index, 1);
        }
    }
    
    res.redirect('/cart');
};

// Vaciar carrito
const clearCart = (req, res) => {
    req.session.cart = [];
    res.redirect('/cart');
};

module.exports = { addToCart, getCart, increaseQuantity, decreaseQuantity, clearCart };