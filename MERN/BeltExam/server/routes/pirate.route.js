const PirateController = require('../controllers/pirate.controller');
const Pirate = require('../models/pirate.model');
module.exports = function(app){

    app.get('/api/pirates/findAll', PirateController.findAll);
    app.get('/api/pirates/:id/view', PirateController.findOne);
    app.post('/api/pirates/create', PirateController.createPirate);
    app.patch('/api/pirates/:id/edit', PirateController.updateOne);
    app.delete('/api/pirates/:id', PirateController.deleteOne);
}