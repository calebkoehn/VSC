from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.show import Show


@app.route("/new")
def new_show():
    if "user_id" not in session:
        flash("Please login or register before entering site!")
        return redirect("/")

    return render_template("new_show.html", user_id = session["user_id"])

@app.route("/add_show", methods=["POST"])
def add_show():
    if "user_id" not in session:
        flash("Please login or register before entering site!")
        return redirect("/")
    data = {
        "title" : request.form["title"],
        "network" : request.form["network"],
        "release_date" : request.form["release_date"],
        "description" : request.form["description"],
        "user_id" : request.form["user_id"],
    }

    if not Show.validate_show(data):
        return redirect("/new")

    Show.add_show(data)


    return redirect("/dashboard")

@app.route("/show/<int:show_id>/view")
def view_show(show_id):
    if "user_id" not in session:
        flash("Please login or register before entering site!")
        return redirect("/")
    data ={
        "show_id" : show_id
    }
    show = Show.get_show_with_user(data)

    return render_template("view_show.html", show = show)

@app.route("/show/<int:show_id>/edit")
def edit_show(show_id):
    data = {
        "show_id" : show_id
    }
    show = Show.get_show_with_user(data)
    return render_template("edit_show.html", show = show)

@app.route("/show/<int:show_id>/update", methods=["POST"])
def update_show(show_id):
    data = {
        "title" : request.form["title"],
        "network" : request.form["network"],
        "release_date" : request.form["release_date"],
        "description" : request.form["description"],
        "show_id" : show_id
    }

    if not Show.validate_show(data):
        return redirect(f"/show/{show_id}/edit")

    Show.update_show(data)

    return redirect("/dashboard")

@app.route("/show<int:show_id>/delete")
def delete_show(show_id):
    
    data = {
        "show_id" : show_id
    }

    Show.delete_show(data)
    return redirect("/dashboard")