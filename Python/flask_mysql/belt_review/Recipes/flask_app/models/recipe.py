from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app.models import user

from flask_app import app

class Recipe:
    def __init__(self,data):
        self.id= data["id"]
        self.name= data["name"]
        self.description= data["description"]
        self.instruction= data["instruction"]
        self.date= data["date"]
        self.time= data["time"]
        self.created_at= data["created_at"]
        self.updated_at= data["updated_at"]
        self.user_id= data["user_id"]
        
        self.user = {}

    @staticmethod
    def validate_recipe(data):
        is_valid = True

        if len(data["name"]) <2:
            flash("Dog name must be longer than 2 characters")
            is_valid = False

        if len(data["description"]) <3 :
            flash("Description must be longer than 3 characters")
            is_valid = False

        if len(data["instruction"]) <3 :
            flash("Instructions must be longer than 3 characters")
            is_valid = False

        return is_valid

    @classmethod
    def add_recipe(cls,data):
        query = "INSERT INTO recipes (name, description, instruction, date, created_at) VALUES (%(name)s, %(description)s, %(instruction)s,%(date)s, NOW());"
        results = connectToMySQL("recipes_schema").query_db(query,data)
        return results

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM recipes LEFT JOIN users ON recipes.user_id = users.id;"
        results = connectToMySQL("recipes_schema").query_db(query)
        
        all_recipes = []

        for row in results: 
            recipe = cls(row)

            user_data = {
                "id": row["users.id"],
                "first_name": row["first_name"],
                "last_name": row["last_name"],
                "email": row["email"],
                "password": row["password"],
                "created_at": row["users.created_at"],
                "updated_at": row["updated_at"],
            }
            recipe.user = user.User(user_data)
            all_recipes.append(recipe)

        return all_recipes

    # @classmethod
    # def get_recipe_with_user(cls,data):
    #     query = "SELECT * FROM recipes LEFT JOIN users ON recipes.user_id = users.id WHERE recipes.id = %(recipe_id)s;"
    #     results = connectToMySQL("recipes_schema").query_db(query,data)

    #     recipe = cls(results[0])

    #     user_data = {
    #         "id": results[0]["users.id"],
    #         "first_name": results[0]["first_name"],
    #         "last_name": results[0]["last_name"],
    #         "email": results[0]["email"],
    #         "password": results[0]["password"],
    #         "created_at": results[0]["users.created_at"],
    #         "updated_at": results[0]["updated_at"],
    #     }
    #     recipe.user = user.User(user_data)
    #     return recipe

    # @classmethod
    # def update_recipe_info(cls, data):
    #     query = "UPDATE recipes SET name= %(name)s, breed =  %(breed)s, age =  %(age)s, updated_at = NOW() WHERE id = %(recipe_id)s;"
    #     results = connectToMySQL("recipes_schema").query_db(query,data)

    # @classmethod
    # def delete_recipe(cls, data):
    #     query = "DELETE FROM recipes WHERE ID = %(recipe_id)s;"
    #     results = connectToMySQL("recipes_schema").query_db(query,data)
    #     return