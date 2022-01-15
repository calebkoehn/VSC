from flask import Flask, render_template, redirect, session, request
app = Flask(__name__)

app.secret_key = 'secret key'

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/survey', methods=['POST'])
def survey():

    session["name"] = request.form['name']
    session["city"] = request.form['city']
    session["language"] = request.form['language']
    session["Comment"] = request.form['Comment']

    return redirect('/success')

@app.route('/success')
def success():
    return render_template('success.html')




if __name__=="__main__":
    app.run(debug=True)