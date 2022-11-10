from flask import Flask
from flask_sqlalchemy import SQLAlchemy

from flask_login import (LoginManager, login_manager, login_user, logout_user, login_required, UserMixin)

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///user.db'
app.config['SECRET_KEY'] = 'secretkey'
app.app_context().push()
db = SQLAlchemy(app)
login_manager = LoginManager()
login_manager.init_app(app)

db.create_all()

login_manager.init_app(app)

'''
class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
'''