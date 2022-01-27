from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re


EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 

class Email:
    def __init__(self, data):
        self.id = data['id']
        self.email = data['email']
        self.created_at = data['created_at']


    @classmethod
    def save(cls, data):
        query = "INSERT INTO emails (email) VALUES (%(email)s;"
        return connectToMySQL('email_schema').query_db(query,data)


    @classmethod
    def get_all(cls):
        query = "SELECT * FROM emails;"
        results = connectToMySQL('email_schema').query_db(query)
        emails = []
        for row in results:
            emails.append(cls(row))
        return emails
        

    @staticmethod
    def validate_email(email):
        is_valid = True
        query = "SELECT * FROM emails WHERE email = %(email)s;"
        results = connectToMySQL('email_schema').query_db(query, email)
        if len(results) > 0:
            flash("Email Taken.")
            is_valid = FALSE
        if not EMAIL_REGEX.match(email['email']): 
            flash("Invalid email address!")
            is_valid = False
        return is_valid
