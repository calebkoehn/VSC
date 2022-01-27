import imp
from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.owner import Owner
from flask_app.models.dog import Dog
from flask_bcrypt import Bcrypt        
bcrypt = Bcrypt(app) 

@app.route('/')
def index():
    return render_template("index.html")

@app.route("/register", methods=['POST'])
def register():
    data = {
        "first_name" : request.form["first_name"],
        "last_name" : request.form["last_name"],
        "email" : request.form["email"],
        "password" : request.form["password"],
        "pass_conf" : request.form["pass_conf"],
    }

    if not Owner.validate_register(data):
        return redirect("/")

    data["password"] = bcrypt.generate_password_hash(request.form['password'])
    
    new_owner_id = Owner.create_owner(data)

    session["owner_id"] = new_owner_id
    return redirect("/dashboard")


@app.route("/login", methods=['POST'])
def login():
    data= {
        "email" : request.form["email"],
        "password" : request.form["password"],
    }

    if not Owner.validate_login(data):
        return redirect("/")

    owner = Owner.get_by_email(data)

    session["owner_id"] = owner.id
    return redirect("/dashboard")

@app.route("/dashboard")
def dashboard():
    if "owner_id" not in session:
        flash("Please login or register before entering site!")
        return redirect("/")
    
    data = {
        "owner_id" : session["owner_id"]

    }
    owner = Owner.get_by_id(data)
    all_dogs = Dog.get_all()

    return render_template("dashboard.html", owner = owner, all_dogs = all_dogs)


@app.route("/logout")
def logout():
    session.clear()
    flash("Successfully logged out!")
    return redirect("/")