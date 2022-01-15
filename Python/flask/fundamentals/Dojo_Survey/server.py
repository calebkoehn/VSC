from flask import Flask, render_template, redirect, session, request
app = Flask(__name__)

app.secret_key = 'secret key'

@app.route('/')
def index():
    if "name" not in session:
        name = "Default"
    else:
        name = session["name"]

    return render_template('index.html', name=name)


@app.route('/users', methods=['POST'])
def create_user():
    print("Got Post Info")
    print(request.form)
    print(request.form["name"])
    print(request.form["city"])
    print(request.form["language"])
    print(request.form["Comment"])

    session["name"] = request.form['name']
    session["city"] = request.form['city']
    session["language"] = request.form['language']
    session["Comment"] = request.form['Comment']

    return redirect('/')




if __name__=="__main__":
    app.run(debug=True)