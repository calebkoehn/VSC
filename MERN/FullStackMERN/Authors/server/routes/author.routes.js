const AuthorController = require('../controllers/author.controller');
module.exports = function(app){

    app.get('/api/authors', AuthorController.getAllAuthors);
    app.get('/api/author/:id', AuthorController.getAuthorById);
    app.post('/api/author/new', AuthorController.createAuthor);
    app.put('/api/author/:id', AuthorController.updateAuthor);
    app.delete('/api/author/:id', AuthorController.deleteAuthor);
}