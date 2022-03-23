const JobController = require('../controllers/job.controller');
module.exports = function(app){

    app.get('/api/jobs', JobController.getAllJobs);
    app.get('/api/job/:id', JobController.getJobById);
    app.post('/api/job/new', JobController.createJob);
    app.patch('/api/job/:id', JobController.updateJob);
    app.delete('/api/job/:id', JobController.deleteJob);
}