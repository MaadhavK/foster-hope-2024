# import json
# from flask import Flask, request
# from flask_sqlalchemy import SQLAlchemy
# from sqlalchemy.orm import DeclarativeBase

# class Base(DeclarativeBase):
#     pass

# db = SQLAlchemy(Base)

# app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://postgres.bonmudwmggaxnixodrbn:Fosterhopeswe22!@aws-0-us-west-1.pooler.supabase.com:5432/postgres'
# db.init_app(app)

# @app.route('/api/counties/<string:county_name>', methods=['GET'])
# def get_all_counties(county_name):

#     return 0


import json
from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine, text
from endpoints import app


engine = create_engine("'postgres://postgres.bonmudwmggaxnixodrbn:Fosterhopeswe22!@aws-0-us-west-1.pooler.supabase.com:5432/postgres'", future=True)

@app.route('/api/counties')
def counties():
    with engine.connect() as connection:
        county = request.args.get("county_name")
        query = ""

        if county:
            query = text("SELECT * FROM Counties WHERE county LIKE '%'" + str(county) + "'%'")
        else:
            query = text("SELECT * FROM counties")
        
        result = connection.execute(query)
        data = [x._asdict() for x in result.all()]
        return json.JSONEncoder().encode({"data": data})

@app.route('/api/orgs')
def orgs():
    with engine.connect() as connection:
        org = request.args.get("org_name")
        query = ""

        if org:
            query = text("SELECT * FROM Organizations WHERE name LIKE '%'" + str(org) + "'%'")
        else:
            query = text("SELECT * FROM Organizations")
        
        result = connection.execute(query)
        data = [x._asdict() for x in result.all()]
        return json.JSONEncoder().encode({"data": data})
    
@app.route('/api/resources')
def resources():
    with engine.connect() as connection:
        name = request.args.get("resource_name")
        resource_type = request.args.get("type")
        query = ""

        if name:
            query = text("SELECT * FROM Resources WHERE name LIKE '%'" + str(name) + "'%'")
        elif resource_type:
            query = text("SELECT * FROM Resources WHERE type LIKE '%'" + str(resource_type) + "'%'")
        else:
            query = text("SELECT * FROM Resources")
        
        result = connection.execute(query)
        data = [x._asdict() for x in result.all()]
        return json.JSONEncoder().encode({"data": data})