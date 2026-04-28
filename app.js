const express = require('express');
const app = express();
const PORT = 5500;

// Express usa EJS para renderizar las vistas
app.set('view engine', 'ejs');
app.set('views', './views');

// Archivos estaticos (CSS, imagenes)
app.use(express.static('assets'));

app.use(express.urlencoded({ extended: true }));

// -- RUTAS --

app.get('/', (req, res) => {
    res.render('pages/index');
});

app.get('/products', (req, res) => {
    res.render('pages/product');
})

app.get('/cart', (req, res) => {
    res.render('pages/cart');
})

app.get('/checkout', (req, res) => {
    res.render('pages/checkout');
})

app.get('/register', (req, res) => {
    res.render('pages/register');
})

app.get('/login', (req, res) => {
    res.render('pages/login');
})

// -- ARRANCAR EL SERVIDOR --

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});