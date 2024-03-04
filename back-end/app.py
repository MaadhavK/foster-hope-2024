import json
from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase

class Base(DeclarativeBase):
    pass

db = SQLAlchemy(Base)

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://postgres.bonmudwmggaxnixodrbn:Fosterhopeswe22!@aws-0-us-west-1.pooler.supabase.com:5432/postgres'
db.init_app(app)

@app.route('/api/counties/<string:county_name>', methods=['GET'])
def get_all_counties(county_name):

    return 0