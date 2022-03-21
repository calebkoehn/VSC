const { Product } = require('../models/product.model');

// The method below is new
module.exports.createProduct = (req, res) => {
    
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

module.exports.findAllProducts = (req, res) => {
    
    Product.find()
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

module.exports.findProductById = (req, res) => {
    
    Product.findOne({_id: req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err));
}