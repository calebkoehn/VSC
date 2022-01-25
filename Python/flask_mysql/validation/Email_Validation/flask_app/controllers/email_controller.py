from flask import render_template, redirect, request
from flask_app import app
from flask_app.modules.email import Email


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/process',methods=['POST'])
def process():
    if not Email.validate_email(request.form):
        return redirect('/')
    Email.save(request.form)
    return redirect('/success')


@app.route('/success')
def results():
    return render_template("success.html",emails=Email.get_all())

