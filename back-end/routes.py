import json
from flask import Flask, request
from sqlalchemy import create_engine, text
from endpoints import app


engine = create_engine("postgresql://postgres.bonmudwmggaxnixodrbn:2PLFaKPRPW3bxsh9@aws-0-us-west-1.pooler.supabase.com:5432/postgres", future=True)

@app.route('/counties/single_county')
def single_county():
    with engine.connect() as connection:
        county = request.args.get("county_name")
        query = ""

        if county:
            query = text('SELECT * FROM "Counties" WHERE name LIKE '+"'%" + str(county)+"%'")
        
        result = connection.execute(query)
        data = [x._asdict() for x in result.all()]
        return json.JSONEncoder().encode({"data": data})
    
@app.route('/counties/all_counties')
def all_counties():
    with engine.connect() as connection:
        query = text('SELECT * FROM "Counties"')
        
        result = connection.execute(query)
        data = [x._asdict() for x in result.all()]
        return json.JSONEncoder().encode({"data": data})

@app.route('/orgs/single_org')
def single_org():
    with engine.connect() as connection:
        org = request.args.get("org_name")
        query = ""

        if org:
            query = text('SELECT * FROM "Organizations" WHERE name LIKE '+"'%" + str(org)+"%'")
        
        result = connection.execute(query)
        data = [x._asdict() for x in result.all()]
        return json.JSONEncoder().encode({"data": data})

@app.route('/orgs/all_orgs')
def all_orgs():
    with engine.connect() as connection:
        query = text('SELECT * FROM "Organizations"')

        result = connection.execute(query)
        data = [x._asdict() for x in result.all()]
        return json.JSONEncoder().encode({"data": data})
    
@app.route('/resources/single_resource')
def resources():
    with engine.connect() as connection:
        name = request.args.get("resource_name")
        query = ""

        if name:
            query = text('SELECT * FROM "Resources" WHERE name LIKE '+"'%" + str(name)+"%'")
        
        result = connection.execute(query)
        data = [x._asdict() for x in result.all()]
        return json.JSONEncoder().encode({"data": data})

@app.route('/resources/all_resource_type')
def all_resource_type():
    with engine.connect() as connection:
        resource_type = request.args.get("type")
        query = ""

        if resource_type:
            query = text('SELECT * FROM "Resources" WHERE name LIKE '+"'%" + str(resource_type)+"%'")
        
        result = connection.execute(query)
        data = [x._asdict() for x in result.all()]
        return json.JSONEncoder().encode({"data": data})
    
@app.route('/resources/all_resources')
def all_resources():
    with engine.connect() as connection:
        query = query = text('SELECT * FROM "Resources"')

        result = connection.execute(query)
        data = [x._asdict() for x in result.all()]
        return json.JSONEncoder().encode({"data": data})