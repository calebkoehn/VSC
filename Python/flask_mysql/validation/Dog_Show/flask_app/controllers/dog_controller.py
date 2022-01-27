from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.dog import Dog


@app.route("/new_dog")
def new_dog():
    if "owner_id" not in session:
        flash("Please login or register before entering site!")
        return redirect("/")

    return render_template("new_dog.html", owner_id = session["owner_id"])

@app.route("/create_dog", methods=["POST"])
def create_dog():
    data = {
        "name" : request.form["name"],
        "breed" : request.form["breed"],
        "age" : request.form["age"],
        "owner_id" : request.form["owner_id"],
    }

    if not Dog.validate_dog(data):
        return redirect("/new_dog")

    Dog.create_dog(data)


    return redirect("/dashboard")

@app.route("/dog/<int:dog_id>")
def show_dog(dog_id):
    if "owner_id" not in session:
        flash("Please login or register before entering site!")
        return redirect("/")
    data ={
        "dog_id" : dog_id
    }
    dog = Dog.get_dog_with_owner(data)

    return render_template("show_dog.html", dog = dog)


@app.route("/dog/<int:dog_id>/edit")
def edit_dog(dog_id):
    data = {
        "dog_id" : dog_id
    }
    dog = Dog.get_dog_with_owner(data)
    return render_template("edit_dog.html", dog = dog)


@app.route("/dog/<int:dog_id>/update", methods=["POST"])
def update_dog(dog_id):
    data = {
        "name" : request.form["name"],
        "breed" : request.form["breed"],
        "age" : request.form["age"],
        "dog_id" : dog_id
    }

    if not Dog.validate_dog(data):
        return redirect(f"/dog/{dog_id}/edit")

    Dog.update_dog_info(data)

    return redirect("/dashboard")


@app.route("/dog<int:dog_id>/delete")
def delete_dog(dog_id):
    
    data = {
        "dog_id" : dog_id
    }

    Dog.delete_dog(data)
    return redirect("/dashboard")