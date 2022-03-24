const mongoose = require('mongoose');
const JobSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be at least  3 characters"]
    },
    company: { 
        type: String,
        required: [true, "Company is required"],
        minlength: [3, "Title must be at least  3 characters"]
    },
    salary: { 
        type: Number,
        minlength: [70000, "Don't sell yourself short!"] 
    },
    remote: { 
        type: Boolean,
        required: true 
    },
    color: {
        type: String,
        default: "gray"
    },
    numJobs: {
        type: Number,
        required: [true, "Number of Jobs is required"],
        min:[0, "You can't have a negative applications!"],
        default: 1
    },
    active: {
        type: Boolean,
        required: [true, "Active Status is required"],
        default: true
    }
}, { timestamps: true });
module.exports.Job = mongoose.model('Job', JobSchema);
