const express = require('express');
const app = express();

const PORT = 5500;

const products = require("./data/products");

const categorias = [
  { icon: "fa-tv", nombre: "Electronica" },
  { icon: "fa-burger", nombre: "Alimentos" },
  { icon: "fa-bottle-water", nombre: "Bebidas" },
  { icon: "fa-shirt", nombre: "Indumentaria" },
  { icon: "fa-gamepad", nombre: "Juegos" },
  { icon: "fa-car-rear", nombre: "Automotor" },
  { icon: "fa-couch", nombre: "Hogar" },
  { icon: "fa-gift", nombre: "Otros" }
];


app.set('view engine', 'ejs');
app.set('views', './views');


// ARCHIVOS ESTATICOS
app.use(express.static('assets'));

app.use(express.urlencoded({ extended: true }));


// HOME
app.get('/', (req, res) => {

  res.render('pages/index', {
    products,
    categorias
  });

});


// DETALLE PRODUCTO
app.get('/products/:id', (req, res) => {

  const product = products.find(
    p => p.id == req.params.id
  );

  if (!product) {
    return res
      .status(404)
      .send("Producto no encontrado");
  }

  res.render('pages/product', {
    product
  });

});


app.get('/cart', (req, res) => {
  res.render('pages/cart');
});

app.get('/checkout', (req, res) => {

  const cart = [
    products[0],
    products[4],
    products[7]
  ];

  res.render('pages/checkout', {
    cart
  });

});

app.get('/register', (req, res) => {
  res.render('pages/register');
});

app.get('/login', (req, res) => {
  res.render('pages/login');
});


// SERVER
app.listen(PORT, () => {

  console.log(
    `Servidor corriendo en http://localhost:${PORT}`
  );

});