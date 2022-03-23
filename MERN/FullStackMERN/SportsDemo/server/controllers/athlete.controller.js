const { Athlete } = require('../models/athlete.model');

module.exports.list = (req, res) => {
    Athlete.find({})
        .then(athletes => {
            res.json(athletes);
        })
        .catch(err => {
            res.status(400).json(err);
        })
}
module.exports.create = (req, res) => {
    const { firstName, lastName, sport, team} = req.body;
    Athlete.create({
        firstName,
        lastName,
        sport,
        team
    })
        .then(athlete => {
            res.json(athlete)
        })
        .catch(err => {
            res.status(400).json(err);
        })
}

module.exports.detail = (req, res) => {
    const {id} = req.params;
    Athlete.findOne({_id: id})
        .then(athlete => {
            res.json(athlete)
        })
        .catch(err => {
            res.status(400).json(err);
        })
}

module.exports.update = (req, res) => {
    const {id} = req.params;
    const { firstName, lastName, sport, team} = req.body;
    Athlete.findOneAndUpdate({_id: id}, {
        firstName,
        lastName,
        sport,
        team
    }, 
        {
            new: true,
            useFindAndModify: true
        })
        .then(athlete => {
            res.json(athlete)
        })
        .catch(err => {
            res.status(400).json(err);
        })
}

module.exports.delete = (req, res) => {
    const {id} = req.params;
    Athlete.deleteOne({_id: id})
    .then(deleteConfirmation => {
        res.json(deleteConfirmation);
    })
    .catch(err => {
        res.status(400).json(err);
    })
}