const { Skincare } = require('../models/skincare.model');

// The method below is new
module.exports.createProduct = (req, res) => {
    
    Skincare.create(req.body)
        .then(skincare => res.json(skincare))
        .catch(err => res.status(400).json(err))
}

module.exports.findAll = (req, res) => {
    
    Skincare.find()
        .then(skincare => res.json(skincare))
        .catch(err => res.status(400).json(err))
}

module.exports.findOne = (req, res) => {
    
    Skincare.findOne({_id: req.params.id})
        .then(skincare => res.json(skincare))
        .catch(err => res.status(400).json(err))
}

module.exports.updateOne = (req, res) => {
    Skincare.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedSkincare => res.json(updatedSkincare))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteOne = (req, res) => {
    Skincare.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.status(400).json(err))
}