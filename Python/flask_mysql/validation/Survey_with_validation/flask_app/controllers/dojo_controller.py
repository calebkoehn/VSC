from flask import render_template, redirect, request
from flask_app import app
from flask_app.modules.dojo import Dojo


@app.route('/')
def index():

    return render_template('index.html')



@app.route('/survey', methods=['POST'])
def survey():
    if Dojo.validate_dojo(request.form):
    
        Dojo.save(request.form)
        return redirect('/success')
    return redirect('/')

@app.route('/success')
def success():
    return render_template('success.html', dojo=Dojo.get_last_dojo())