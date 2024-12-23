from flask import Blueprint, render_template, request, flash

auth = Blueprint("auth",__name__)

@auth.route('/login',methods=['GET','POST'])
def loginFun():
    if request.method == "POST":
        data = request.form
        print(data)
    return render_template("login.html", user="Anuj Kapoor", boolean=True)

@auth.route('/sign-up',methods=['GET','POST'])
def signUp():
    if request.method == "POST":
        email = request.form.get("email")
        name = request.form.get('name')
        password = request.form.get('password')
        if '#' not in password:
            flash("Password must contain #",category="error")
        elif len(password) < 8:
            flash("Password must have minimum 8 characters", category="error")
        else:
            flash("User registered.",category="success")
            print("email ",email)
            print("name ",name)
            print("password ",password)
    return render_template("signUp.html")

@auth.route('/sign-out')
def signOut():
    return render_template('signOut.html', user="Chandler", boolean=True)
