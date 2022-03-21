const jokeController = require('../controllers/jokes.controller')

module.exports = (app) => {
    app.get('/api/jokes', jokeController.getAllJokes)

    app.get('/api/jokes/:_id', jokeController.getJokesById)

    app.get('/api/jokes', jokeController.getAllJokes)

    app.post('/api/jokes/new', jokeController.createJoke)

    app.put('/api/jokes/update/:_id', jokeController.updateJokeById)

    app.delete('/api/jokes/delete/:jokeId', jokeController.deleteJoke)

    app.get('/api/jokes/random', jokeController.randomJoke)

}