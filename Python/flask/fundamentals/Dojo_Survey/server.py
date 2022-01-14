from flask import Flask, render_template, redirect, session

app = Flask(__name__)
app.secret_key = 'shhhh its a secret'





if __name__ == "__main__":
    app.run(debug=True)