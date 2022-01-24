from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash

class Dojo:
    def __init__( self , data ):
        self.id = data['id']
        self.name = data['name']
        self.location = data['location']
        self.language = data['language']
        self.comments = data['comments']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def save(cls,data):
        query = "INSERT INTO dojos (name, location, language, comment, created_at) VALUES (%(name)s, %(location)s, %(language)s, %(comment)s, NOW());"
        return connectToMySQL('dojo_survey_schema').query_db(query,data)

    @classmethod
    def get_last_dojo():
        query = "SELECT * FROM dojos ORDER BY dojos.id DESC LIMIT 1;"
        results = connectToMySQL('dojo_survey_schema').query_db(query)
        return Dojo(results[0])

    @staticmethod
    def validate_dojo(dojo):
        is_valid = True
        if len(dojo['name']) <3:
            is_valid = False
            flash("Name must be longer than 2 characters")
        if len(dojo['location']) <1:
            is_valid = False
            flash("Please choose a location")
        if len(dojo['language']) <1:
            is_valid = False
            flash("Please choose a language")
        if len(dojo['comments']) <3:
            is_valid = False
            flash("Comments must be longer than 2 characters")
        return is_valid