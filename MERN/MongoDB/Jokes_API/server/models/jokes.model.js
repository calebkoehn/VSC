const mongoose = require('mongoose')

const JokeSChema = new mongoose.Schema({
    setup: {
        type:String,
        required: [true, "Must provide a setup to the joke!"],
        minlength: [10, "The Setup needs to be at least 10 characters"]
    },
    punchline: {
        type:String,
        required: [true, "Must provide a punchline!"],
        minlength: [3, "Punchline needs to be at least 3 characters!"]
    }
}, {timestamps: true })

const JokeModel = mongoose.model("Joke", JokeSChema)

module.exports = JokeModel;