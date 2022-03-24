const JobController = require('../controllers/job.controller');
const Job = require('../models/job.model');
module.exports = function(app){

    app.get('/api/jobs/findAll', JobController.findAll);
    app.get('/api/jobs/:id', JobController.findOne);
    app.post('/api/jobs/create', JobController.createJob);
    app.patch('/api/jobs/:id', JobController.updateOne);
    app.delete('/api/jobs/:id', JobController.deleteOne);
}