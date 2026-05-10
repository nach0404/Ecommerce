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

// archivos estaticos
app.use(express.static('assets'));


app.use(express.urlencoded({
  extended: true
}));

// home
app.get('/', (req, res) => {

  res.render('pages/index', {
    products,
    categorias
  });

});

// detalle producto
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

// carrito
app.get('/cart', (req, res) => {

  // carrito de prueba
  const cart = [
    products[0],
    products[4],
    products[7]
  ];

  res.render('pages/cart', {
    cart
  });

});

// checkout
app.get('/checkout', (req, res) => {

  // carrito de prueba
  const cart = [
    products[0],
    products[4],
    products[7]
  ];

  res.render('pages/checkout', {
    cart
  });

});

// register
app.get('/register', (req, res) => {

  res.render('pages/register');

});



app.post('/register', (req, res) => {

  const {
    name,
    email,
    password
  } = req.body;

  console.log(name);
  console.log(email);
  console.log(password);

  res.send("Usuario registrado");

});

// login
app.get('/login', (req, res) => {

  res.render('pages/login');

});



app.post('/login', (req, res) => {

  const {
    username,
    password
  } = req.body;

  console.log(username);
  console.log(password);

  res.send("Login recibido");

});

// server
app.listen(PORT, () => {

  console.log(
    `Servidor corriendo en http://localhost:${PORT}`
  );

});