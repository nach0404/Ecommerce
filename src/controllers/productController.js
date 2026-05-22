const productsService = require("../services/productsService");

// Ver detalle de un producto
const getProductDetail = (req, res) => {
    const result = productsService.normalizeId(req.params.id);

    if (result.error) { return res.status(result.error).send(result.message); }
    
    const product = productsService.getProductById(result.id);
    const related = productsService.getRelatedProducts(result.id, product.category);

    res.render('pages/product', { product, relatedProducts: related });
};

module.exports = { getProductDetail };