const SkincareController = require('../controllers/skincare.controller');
const Skincare = require('../models/skincare.model');
module.exports = function(app){

    app.get('/api/products/findAll', SkincareController.findAll);
    app.get('/api/products/:id/view', SkincareController.findOne);
    app.post('/api/products/create', SkincareController.createProduct);
    app.patch('/api/products/:id/edit', SkincareController.updateOne);
    app.delete('/api/products/:id', SkincareController.deleteOne);
}