from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.contact import Contact


@app.route("/new_contact")
def new_contact():
    if "user_id" not in session:
        flash("Please login or register before entering site!")
        return redirect("/")

    return render_template("new_contact.html", user_id = session["user_id"])

@app.route("/add_contact", methods=["POST"])
def add_contact():
    if "user_id" not in session:
        flash("Please login or register before entering site!")
        return redirect("/")
    data = {
        "company" : request.form["company"],
        "name" : request.form["name"],
        "email" : request.form["email"],
        "note" : request.form["note"],
        "user_id" : request.form["user_id"],
    }

    if not Contact.validate_contact(data):
        return redirect("/new_contact")

    Contact.add_contact(data)


    return redirect("/dashboard")

@app.route("/contact/<int:contact_id>/view")
def view_contact(contact_id):
    if "user_id" not in session:
        flash("Please login or register before entering site!")
        return redirect("/")
    data ={
        "contact_id" : contact_id
    }
    contact = Contact.get_contact_with_user(data)

    return render_template("view_contact.html", contact = contact)

@app.route("/contact/<int:contact_id>/edit")
def edit_contact(contact_id):
    data = {
        "contact_id" : contact_id
    }
    contact = Contact.get_contact_with_user(data)
    return render_template("edit_contact.html", contact = contact)

@app.route("/contact/<int:contact_id>/update", methods=["POST"])
def update_contact(contact_id):
    data = {
        "company" : request.form["company"],
        "name" : request.form["name"],
        "email" : request.form["email"],
        "note" : request.form["note"],
        "contact_id" : contact_id
    }

    if not Contact.validate_contact(data):
        return redirect(f"/contact/{contact_id}/edit")

    Contact.update_contact(data)

    return redirect("/dashboard")

@app.route("/contact<int:contact_id>/delete")
def delete_contact(contact_id):
    
    data = {
        "contact_id" : contact_id
    }

    Contact.delete_contact(data)
    return redirect("/dashboard")