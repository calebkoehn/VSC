const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [ true, "Name is required"],
        minlength: [3, "The Name needs to be longer than 3 characters!"]
    }
}, {timestamps: true});
module.exports.Author = mongoose.model('Author', AuthorSchema);