const { Job } = require('../models/job.model');

// The method below is new
module.exports.createJob = (req, res) => {
    
    Job.create(req.body)
        .then(job => res.json(job))
        .catch(err => res.status(400).json(err))
}

module.exports.getAllJobs = (req, res) => {
    
    Job.find()
        .then(job => res.json(job))
        .catch(err => res.status(400).json(err))
}

module.exports.getJobById = (req, res) => {
    
    Job.findOne({_id: req.params.id})
        .then(job => res.json(job))
        .catch(err => res.status(400).json(err))
}

module.exports.updateJob = (req, res) => {
    Job.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedJob => res.json(updatedJob))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteJob = (req, res) => {
    Job.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.status(400).json(err))
}
