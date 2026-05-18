const express = require('express');
const path = require('path');
const session = require('express-session');
const cartRoute = require('./src/routes/cartRoute');
const app = express();
const PORT = 3000;

const products = require("./src/data/products");

app.use(session({
  secret: 'miecommerce-secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

// generar categorías dinámicas
const categorias = [...new Set(products.map(p => p.category))];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

//Archivos estaticos
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// -- RUTAS --

// HOME
app.get('/', (req, res) => {

  const suggestedProducts = products.slice(0, 5);

  const featuredProducts = products
    .filter(product => product.featured)
    .slice(0, 10);

  res.render('pages/index', {
    products,
    categorias,
    suggestedProducts,
    featuredProducts
  });

});

// TODOS LOS PRODUCTOS
app.get('/products', (req, res) => {

  res.render('pages/products', {
    products
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
app.use('/cart', cartRoute);

app.get('/checkout', (req, res) => {
  res.render('pages/checkout');
});

app.get('/register', (req, res) => {
  res.render('pages/register');
});

app.get('/login', (req, res) => {
  res.render('pages/login');
});

app.use((req, res) => {
  res.status(404).render('pages/404');
});

// SERVER
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});