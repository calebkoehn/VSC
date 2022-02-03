from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app.models import user

from flask_app import app

class Contact:
    def __init__(self,data):
        self.id= data["id"]
        self.company= data["company"]
        self.name= data["name"]
        self.email= data["email"]
        self.note= data["note"]
        self.created_at= data["created_at"]
        self.updated_at= data["updated_at"]
        self.user_id= data["user_id"]
        
        self.user = {}

    @staticmethod
    def validate_contact(data):
        is_valid = True

        if len(data["company"]) <1:
            flash("Company must be longer than 1 characters")
            is_valid = False

        if len(data["name"]) <3 :
            flash("Name must be longer than 3 characters")
            is_valid = False

        if len(data["email"]) <3 :
            flash("Email must be longer than 3 characters")
            is_valid = False
        return is_valid

    @classmethod
    def add_contact(cls,data):
        query = "INSERT INTO contacts (company, name, email, note,user_id, created_at) VALUES (%(company)s, %(name)s, %(email)s,%(note)s,%(user_id)s, NOW());"
        results = connectToMySQL("crm_schema").query_db(query,data)
        return results

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM contacts LEFT JOIN users ON contacts.user_id = users.id;"
        results = connectToMySQL("crm_schema").query_db(query)
        
        all_contacts = []

        for row in results: 
            contact = cls(row)

            user_data = {
                "id": row["users.id"],
                "first_name": row["first_name"],
                "last_name": row["last_name"],
                "email": row["email"],
                "password": row["password"],
                "created_at": row["users.created_at"],
                "updated_at": row["updated_at"],
            }
            contact.user = user.User(user_data)
            all_contacts.append(contact)

        return all_contacts

    @classmethod
    def get_contact_with_user(cls,data):
        query = "SELECT * FROM contacts LEFT JOIN users ON contacts.user_id = users.id WHERE contacts.id = %(contact_id)s;"
        results = connectToMySQL("crm_schema").query_db(query,data)

        contact = cls(results[0])

        user_data = {
            "id": results[0]["users.id"],
            "first_name": results[0]["first_name"],
            "last_name": results[0]["last_name"],
            "email": results[0]["email"],
            "password": results[0]["password"],
            "created_at": results[0]["users.created_at"],
            "updated_at": results[0]["updated_at"],
        }
        contact.user = user.User(user_data)
        return contact

    @classmethod
    def update_contact(cls, data):
        query = "UPDATE contacts SET company= %(company)s, name =  %(name)s, email =  %(email)s, note =  %(note)s, updated_at = NOW() WHERE id = %(contact_id)s;"
        results = connectToMySQL("crm_schema").query_db(query,data)

    @classmethod
    def delete_contact(cls, data):
        query = "DELETE FROM contacts WHERE ID = %(contact_id)s;"
        results = connectToMySQL("crm_schema").query_db(query,data)
        return