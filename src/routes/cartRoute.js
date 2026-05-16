const express = require('express');
const router = express.Router();
const { addToCart, getCart, increaseQuantity, decreaseQuantity, clearCart } = require('../controllers/cartController');

router.get('/', getCart);
router.post('/add/:id', addToCart);
router.post('/increase/:id', increaseQuantity);
router.post('/decrease/:id', decreaseQuantity);
router.post('/clear', clearCart);

module.exports = router;