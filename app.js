const express = require('express');
const app = express();
const PORT = 5500;

const products = require("./data/products");

// generar categorías dinámicas
const categorias = [...new Set(products.map(p => p.category))];

app.set('view engine', 'ejs');
app.set('views', './views');

//Archivos estaticos
app.use(express.static('assets'));

app.use(express.urlencoded({ extended: true }));

// -- RUTAS --

// HOME
app.get('/', (req, res) => {
  res.render('pages/index', {
    products,
    categorias
  });
});

// DETALLE DE PRODUCTO
app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id == req.params.id);

  if (!product) {
    return res.status(404).send("Producto no encontrado");
  }

  res.render('pages/product', { product });
});

// OTRAS PÁGINAS
app.get('/cart', (req, res) => {
  res.render('pages/cart');
});

app.get('/checkout', (req, res) => {
  res.render('pages/checkout');
});

app.get('/register', (req, res) => {
  res.render('pages/register');
});

app.get('/login', (req, res) => {
  res.render('pages/login');
});

// SERVER
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});