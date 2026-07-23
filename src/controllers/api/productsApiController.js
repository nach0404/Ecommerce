const productsService = require('../../services/productsService');

const productApiController = {
    
    // GET /api/products
    getAll(req,res) {
        const products = productsService.getAllProducts();
        res.json(products);
    },

    // GET /api/products/:id
    getById(req,res) {
        const id = parseInt(req.params.id);
        if(isNaN(id)) return res.status(400).json({ error : 'ID invalido' });

        const product = productsService.getProductById(id);
        if (!product) return res.status(404).json({ error: 'Producto no encontrado' });

        res.json(product);
    },

    // POST /api/products
    create(req, res) {
        const { name, points } = req.body;
        if (!name || !points) return res.status(400).json({ error: 'Faltan campos obligatorios' });    
        const newProduct = productsService.createProduct(req.body);
        res.status(201).json(newProduct);
    },

    // PUT /api/products/:id
    update(req, res) {
        const id = parseInt(req.params.id);
        if (isNaN(id)) return res.status(400).json({ error: 'ID inválido' });    
        const product = productsService.getProductById(id);
        if (!product) return res.status(404).json({ error: 'Producto no encontrado' });    
        const updated = productsService.updateProduct(id, req.body);
        res.json(updated);
    },

    // DELETE /api/products/:id
    delete(req, res) {
        const id = parseInt(req.params.id);
        if (isNaN(id)) return res.status(400).json({ error: 'ID inválido' });    
        const product = productsService.getProductById(id);
        if (!product) return res.status(404).json({ error: 'Producto no encontrado' });    
        productsService.deleteProduct(id);
        res.status(204).send();
    }

};

module.exports = productApiController;