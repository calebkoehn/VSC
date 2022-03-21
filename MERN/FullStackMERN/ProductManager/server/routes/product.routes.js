const ProductController = require('../controllers/product.controller');
module.exports = function(app){

    app.post('/api/product/new', ProductController.createProduct);
    app.get('/api/products', ProductController.findAllProducts);
    app.get('/api/product/:id', ProductController.findProductById);
}

