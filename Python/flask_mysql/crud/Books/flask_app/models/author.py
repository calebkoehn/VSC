from ..config.mysqlconnection import connectToMySQL
from flask_app.models import book

class Author:
    def __init__(self,data):
        self.id = data['id']
        self.name = data['name']
        self.favorite_books = []
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    @classmethod
    def get_all(cls):
        query = "SELECT * FROM authors;"
        authors = []
        results = connectToMySQL('books_schema').query_db(query)
        for row in results: 
            authors.append(cls(row))
        return authors


    @classmethod
    def save(cls,data):
        query = "INSERT INTO authors (name,created_at,updated_at) VALUES (%(name)s,NOW(),NOW());"
        return connectToMySQL('books').query_db(query,data)