from contextlib import nullcontext
from flask import Flask, render_template, redirect, session, request
import random
app = Flask(__name__)
app.secret_key = "random"


@app.route('/')
def index():
    if "computer_guess" not in session:
        session['computer_guess'] = random.randint(1,100)
    print(session['computer_guess'])
    guess = None
    location = None

    if 'guess' in session:
        guess = session['computer_guess']
        location = session['location']

    return render_template('index.html', guess=guess, location=location)

@app.route("/process_guess", methods=['POST'])
def process():
    
    guess = int(request.form['guess'])
    session['guess'] = guess
    comp= int(session['computer_guess'])



    if guess > comp:
        print('Your guess is too high!')
        session['location'] = 'high'
    if guess < comp:
        print('Your guess is too low!')
        session['location'] = 'low'
    if guess == comp:
        print('Right on the money')
        session['location'] = 'correct'
        


    return redirect('/')


if __name__=="__main__":
    app.run(debug=True)