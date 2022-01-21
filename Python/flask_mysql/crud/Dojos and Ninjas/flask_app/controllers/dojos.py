from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.burger import Dojo


@app.route('/')
def index():
    return (/dojos)


@app.route('/dojos')
def dojos():
    return render_template("dojos.html",dojos=Dojo.get_all())