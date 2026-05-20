const express = require('express');
const path = require('path');
const session = require('express-session');
const cartRoute = require('./src/routes/cartRoute');
const expressLayouts = require('express-ejs-layouts');
const productsService = require('./src/services/productsService');
const cartService = require('./src/services/cartService');

const app = express();
const PORT = 3000;

app.use(session({
  secret: 'miecommerce-secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layouts/main');
app.set('views', path.join(__dirname, 'src/views'));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Middleware total del carrito
app.use((req, res, next) => {
  const cartItems = cartService.getCart(req.session);
  res.locals.cartTotal = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  next();
});

// -- RUTAS --

// HOME
app.get('/', (req, res) => {
  res.render('pages/index', {
    products: productsService.getAllProducts(),
    categorias: productsService.getCategories(),
    suggestedProducts: productsService.getSuggestedProducts(),
    featuredProducts: productsService.getFeaturedProducts()
  });
});

// TODOS LOS PRODUCTOS
app.get('/products', (req, res) => {
  const sort = req.query.sort;

  res.render('pages/products', {
    products: productsService.getSortedProducts(sort),
    sort
  });
});

// DETALLE DE PRODUCTO
app.get('/products/:id', (req, res) => {
  const id = productsService.normalizeId(req.params.id);

  if (id === null) return res.status(400).render('pages/404');

  const product = productsService.getProductById(id);

  if (!product) return res.status(404).render('pages/404');

  res.render('pages/product', {
    product,
    relatedProducts: productsService.getRelatedProducts(id, product.category)
  });
});

// PRODUCTOS POR CATEGORIA
app.get('/categories/:category', (req, res) => {
  res.render('pages/categories', {
    category: req.params.category,
    filteredProducts: productsService.getProductByCategory(req.params.category)
  });
});

// BUSCADOR
app.get('/search', (req, res) => {
  const query = req.query.query;
  const results = productsService.searchProducts(query);

  res.render('pages/search', { results, query});
});

// OTRAS PAGINAS
app.use('/cart', cartRoute);

app.get('/checkout', (req, res) => res.render('pages/checkout'));
app.get('/register', (req, res) => res.render('pages/register'));
app.get('/login', (req, res) => res.render('pages/login'));

// Middleware error 404 y 500
app.use((req, res) => res.status(404).render('pages/404'));
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).render('pages/500');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});