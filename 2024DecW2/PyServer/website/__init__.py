from flask import Flask

def create_App():
    app = Flask(__name__)
    app.config['SECRET_KEY']="FlaskServer"
    return app