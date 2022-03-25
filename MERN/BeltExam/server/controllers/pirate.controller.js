const { Pirate } = require('../models/pirate.model');
// The method below is new
module.exports.createPirate = (req, res) => {
    
    Pirate.create(req.body)
        .then(pirate => res.json(pirate))
        .catch(err => res.status(400).json(err))
}

module.exports.findAll = (req, res) => {
    
    Pirate.find()
        .then(pirate => res.json(pirate))
        .catch(err => res.status(400).json(err))
}

module.exports.findOne = (req, res) => {
    
    Pirate.findOne({_id: req.params.id})
        .then(pirate => res.json(pirate))
        .catch(err => res.status(400).json(err))
}

module.exports.updateOne = (req, res) => {
    Pirate.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedPirate => res.json(updatedPirate))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteOne = (req, res) => {
    Pirate.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.status(400).json(err))
}