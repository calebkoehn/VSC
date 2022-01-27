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
    if "user_id" not in session:
        flash("Please login or register before entering site!")
        return redirect("/")
    data = {
        "name" : request.form["name"],
        "description" : request.form["description"],
        "instruction" : request.form["instruction"],
        "date" : request.form["date"],
        "under30" : int(request.form["under30"]),
        "user_id" : request.form["user_id"],
    }

    if not Recipe.validate_recipe(data):
        return redirect("/create_recipe")

    Recipe.add_recipe(data)


    return redirect("/dashboard")

@app.route("/recipe/<int:recipe_id>/view")
def show_recipe(recipe_id):
    if "user_id" not in session:
        flash("Please login or register before entering site!")
        return redirect("/")
    data ={
        "recipe_id" : recipe_id
    }
    recipe = Recipe.get_recipe_with_user(data)

    return render_template("show_recipe.html", recipe = recipe)

@app.route("/recipe/<int:recipe_id>/edit")
def edit_recipe(recipe_id):
    data = {
        "recipe_id" : recipe_id
    }
    recipe = Recipe.get_recipe_with_user(data)
    return render_template("edit_recipe.html", recipe = recipe)

@app.route("/recipe/<int:recipe_id>/update", methods=["POST"])
def update_recipe(recipe_id):
    data = {
        "name" : request.form["name"],
        "description" : request.form["description"],
        "instruction" : request.form["instruction"],
        "date" : request.form["date"],
        "under30" : int(request.form["under30"]),
        "recipe_id" : recipe_id
    }

    if not Recipe.validate_recipe(data):
        return redirect(f"/recipe/{recipe_id}/edit")

    Recipe.update_recipe(data)

    return redirect("/dashboard")

@app.route("/recipe<int:recipe_id>/delete")
def delete_recipe(recipe_id):
    
    data = {
        "recipe_id" : recipe_id
    }

    Recipe.delete_recipe(data)
    return redirect("/dashboard")