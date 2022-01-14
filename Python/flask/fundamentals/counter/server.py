from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'shhhh'


@app.route('/')
def index():
    if 'key_name' in session:
        print('key exists!')
    else:
        print("key 'key_name' does NOT exist")
        return render_template("index.html")














if __name__ == "__main__":
    app.run(debug=True)