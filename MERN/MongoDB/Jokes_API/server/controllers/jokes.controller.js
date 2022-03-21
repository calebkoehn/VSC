const JokeModel = require('../models/jokes.model')

module.exports.getAllJokes = (req,res) => {

    JokeModel.find({})
        .then(  (jokeObj) => {
            console.log(jokeObj)
            return res.json(jokeObj)
        }).catch ( (err) => {
            console.log(`err: ${err}`)
            return res.json(err)
        })
}
module.exports.getJokesById = (req,res) => {
    

    JokeModel.find({_id:req.params._id})
        .then( (jokeObj) => {
            console.log(jokeObj)
            return res.json(jokeObj)
        }).catch ( (err) => {
            console.log(`err: ${err}`)
            return res.json(err)
        })
}

module.exports.updateJokeById = (req,res) => {
    

    JokeModel.updateOne({_id:req.params._id}, 
        {$set:{punchline:req.body.punchline, setup:req.body.setup}})
        .then(  (jokeObj) => {
            console.log(jokeObj)
            return res.json(jokeObj)
        }).catch ( (err) => {
            console.log(`err: ${err}`)
            return res.json(err)
        })
}

module.exports.createJoke = (req,res) => {
    

    JokeModel.create(req.body)
    .then(  (jokeObj) => {
        console.log('Great Success! Joke written')
        return res.json(jokeObj)
    }).catch ( (err) => {
        console.log(`err: ${err}`)
        return res.json(err)
    })
}
module.exports.randomJoke = (req,res) => {
    JokeModel.find()
        .then( getAllJokes => {
            let randomInt = Math.floor(Math.random() * getAllJokes.length);
            return res.json({ jokeObj: getAllJokes[randomInt]});
        }).catch ( (err) => {
            console.log(`err: ${err}`)
            return res.json(err)
        })
}

module.exports.deleteJoke = (req,res) => {
    

    JokeModel.deleteOne({_id:req.params.jokeId})
        .then( deletedJoke => {
            console.log("Great Success! Joke Deleted.")
            console.log(deletedJoke)
            return res.json(deletedJoke)
        }).catch ( (err) => {
            console.log(`err: ${err}`)
            return res.json(err)
        })
}