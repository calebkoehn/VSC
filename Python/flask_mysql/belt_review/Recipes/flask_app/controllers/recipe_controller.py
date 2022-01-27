from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.recipe import Recipe


@app.route("/create_recipe")
def create_recipe():
    if "user_id" not in session:
        flash("Please login or register before entering site!")
        return redirect("/")

    return render_template("create_recipe.html", user_id = session["user_id"])

@app.route("/add_recipe", methods=["POST"])
def add_recipe():
    data = {
        "name" : request.form["name"],
        "description" : request.form["description"],
        "instruction" : request.form["instruction"],
        "date" : request.form["date"],
    }

    if not Recipe.validate_recipe(data):
        return redirect("/add_recipe")

    Recipe.add_recipe(data)


    return redirect("/dashboard")

# @app.route("/dog/<int:dog_id>")
# def show_dog(dog_id):
#     if "user_id" not in session:
#         flash("Please login or register before entering site!")
#         return redirect("/")
#     data ={
#         "dog_id" : dog_id
#     }
#     dog = Dog.get_dog_with_user(data)

#     return render_template("show_dog.html", dog = dog)


# @app.route("/dog/<int:dog_id>/edit")
# def edit_dog(dog_id):
#     data = {
#         "dog_id" : dog_id
#     }
#     dog = Dog.get_dog_with_user(data)
#     return render_template("edit_dog.html", dog = dog)


# @app.route("/dog/<int:dog_id>/update", methods=["POST"])
# def update_dog(dog_id):
#     data = {
#         "name" : request.form["name"],
#         "breed" : request.form["breed"],
#         "age" : request.form["age"],
#         "dog_id" : dog_id
#     }

#     if not Dog.validate_dog(data):
#         return redirect(f"/dog/{dog_id}/edit")

#     Dog.update_dog_info(data)

#     return redirect("/dashboard")


# @app.route("/dog<int:dog_id>/delete")
# def delete_dog(dog_id):
    
#     data = {
#         "dog_id" : dog_id
#     }

#     Dog.delete_dog(data)
#     return redirect("/dashboard")