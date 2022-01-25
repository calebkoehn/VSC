from flask_app import app
from flask import render_template, redirect, request, session
from flask_app.models.user import User
from flask_bcrypt import Bcrypt        
bcrypt = Bcrypt(app)  

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/register', methods=["POST"])
def create_user():

    data = {
        "first_name" : request.form["first_name"],
        "last_name" : request.form["last_name"],
        "email" : request.form["email"],
        "password" : request.form["password"]
    }

    if not User.validate_user(data):
        return redirect("/")

    pw_hash = bcrypt.generate_password_hash(request.form['password'])
    print(pw_hash)
    data["password"] = pw_hash

    new_user_id =  User.create_user(data)
    session["user_id"] = new_user_id

    return redirect("/dashboard")

@app.route("/login", methods = ["POST"])
def login():

    data = {
        "email" : request.form["email"],
        "password" : request.form["password"]
    }

    if not User.validate_login(data):
        return redirect("/")

    logged_in_user = User.get_by_email(data)
    session["user_id"] = logged_in_user.id

    return redirect("/dashboard")

@app.route("/dashboard")
def dashboard():

    data = {
        "user_id" : session["user_id"]
    }
    user = User.get_user_by_id(data)

    return render_template('dashboard.html', user = user)


@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")