import json
from flask import Flask, request
from sqlalchemy import create_engine, text
from app import app
from uuid import UUID



engine = create_engine("postgresql://postgres.bonmudwmggaxnixodrbn:2PLFaKPRPW3bxsh9@aws-0-us-west-1.pooler.supabase.com:5432/postgres", future=True)

@app.route('/counties/single_county')
def single_county():
    with engine.connect() as connection:
        county = request.args.get("id")
        query = ""

        if county:
            query = text('SELECT * FROM "Counties" WHERE id =' +"'" + str(county)+"'")
        else:
            return None
 
        result = connection.execute(query)
        data = [x._asdict() for x in result.all()]
        return json.JSONEncoder().encode({"data": data})

# @app.route('/counties/all_counties_search')
# def all_counties_search():
#     with engine.connect() as connection:
#         search_query = request.args.get("search_query")
#         int_search_query = 0
#         query = ""

#         if search_query:
#             query = text('SELECT * FROM "Counties" WHERE county ILIKE :search_query OR number_of_homes ILIKE :search_query OR number_of_foster_kids ILIKE :search_query OR population ILIKE :search_query OR description ILIKE :search_query OR number_of_orgs = :search_query')
#         else:
#             return None
#         # Execute the query with parameters based on their types
#         if search_query.isdigit():  # Check if val is a digit (assuming it's a string)
#             int_search_query = int(search_query)
#             result = connection.execute(query, {'search_query': f'%{search_query}%', 'int_search_query': int_search_query})
#         else:
#             result = connection.execute(query, {'search_query': f'%{search_query}%', 'int_search_query': 0})  # Provide a default value for int_val if val is not a digit

#         data = [x._asdict() for x in result.all()]
#         return json.JSONEncoder().encode({"data": data})  

# @app.route('/counties/all_counties_sort')
# def all_counties_sort():
#     sorts = request.args.get('sort')
#     with engine.connect() as connection:
#         query = 'SELECT * FROM "Counties"'
#         if sorts:
#             for sort in sorts.split(","):
#                 descending = sort[0] == '-' 
#                 field = sort[1:] if descending else sort
#                 query += f' ORDER BY "{field}" {"DESC" if descending else "ASC"},'
#             query = query.rstrip(',')
#         result = connection.execute(text(query))
#         data = [x._asdict() for x in result.all()]
#         return json.JSONEncoder().encode({"data": data})  

# @app.route('/counties/all_counties')
# def all_counties():
#     with engine.connect() as connection:
#         query = text('SELECT * FROM "Counties"')
        
#         result = connection.execute(query)
#         data = [x._asdict() for x in result.all()]
#         return json.JSONEncoder().encode({"data": data})
@app.route('/counties/all_counties')
def all_counties():
    search_query = request.args.get('search_query')
    sort = request.args.get('sort')
    int_search_query = None
    with engine.connect() as connection:
        query = 'SELECT * FROM "Counties"'
        if search_query:
            query += ' WHERE county ILIKE :search_query OR number_of_homes ILIKE :search_query OR number_of_foster_kids ILIKE :search_query OR population ILIKE :search_query OR number_of_orgs = :int_search_query'
            if search_query.isdigit():
                int_search_query = int(search_query)
        if sort:
            descending = sort[0] == '-' 
            field = sort[1:] if descending else sort
            query += ' ORDER BY "{}" {}'.format(field, "DESC" if descending else "ASC")
        
        result = connection.execute(text(query), {'search_query': f'%{search_query}%', 'int_search_query': int_search_query})
        data = [x._asdict() for x in result.all()]
        return json.JSONEncoder().encode({"data": data})

@app.route('/orgs/single_org')
def single_org():
    with engine.connect() as connection:
        org = request.args.get("id")
        query = ""

        if org:
            query = text('SELECT * FROM "Organizations" WHERE id = '+"'" + str(org)+"'")
        else:
            return None
        result = connection.execute(query)
        data = [x._asdict() for x in result.all()]
        return json.JSONEncoder().encode({"data": data})

# @app.route('/orgs/all_orgs')
# def all_orgs():
#     with engine.connect() as connection:
#         query = text('SELECT * FROM "Organizations"')
        
#         result = connection.execute(query)
#         data = [x._asdict() for x in result.all()]
#         return json.JSONEncoder().encode({"data": data})
    
@app.route('/orgs/all_orgs')
def all_orgs():
    search_query = request.args.get('search_query')
    sort = request.args.get('sort')
    int_search_query = None
    with engine.connect() as connection:
        query = 'SELECT * FROM "Organizations"'
        if search_query:
            query += ' WHERE name ILIKE :search_query OR location ILIKE :search_query OR operation_hours ILIKE :search_query OR type ILIKE :search_query OR rating = :int_search_query'
            if search_query.isdigit():
                int_search_query = int(search_query)
        if sort:
            descending = sort[0] == '-' 
            field = sort[1:] if descending else sort
            query += ' ORDER BY "{}" {}'.format(field, "DESC" if descending else "ASC")
        
        result = connection.execute(text(query), {'search_query': f'%{search_query}%', 'int_search_query': int_search_query})
        data = [x._asdict() for x in result.all()]
        return json.JSONEncoder().encode({"data": data})
    
# @app.route('/orgs/all_orgs_search')
# def all_orgs_search():
#     with engine.connect() as connection:
#         search_query = request.args.get("search_query")
#         int_search_query = 0
#         query = ""

#         if search_query:
#             query = text('SELECT * FROM "Organizations" WHERE name ILIKE :search_query OR location ILIKE :search_query OR operation_hours ILIKE :search_query OR type ILIKE :search_query OR description ILIKE :search_query OR rating = :search_query')
#         else:
#             return None
#         if search_query.isdigit(): 
#             int_search_query = int(search_query)
#             result = connection.execute(query, {'search_query': f'%{search_query}%', 'int_search_query': int_search_query})
#         else:
#             result = connection.execute(query, {'search_query': f'%{search_query}%', 'int_search_query': 0})  # Provide a default value for int_val if val is not a digit

#         data = [x._asdict() for x in result.all()]
#         return json.JSONEncoder().encode({"data": data})    

# @app.route('/orgs/all_orgs_sort')
# def all_orgs_sort():
#     sorts = request.args.get('sort')
#     with engine.connect() as connection:
#         query = 'SELECT * FROM "Organizations"'
#         if sorts:
#             for sort in sorts.split(","):
#                 descending = sort[0] == '-' 
#                 field = sort[1:] if descending else sort
#                 query += f' ORDER BY "{field}" {"DESC" if descending else "ASC"},'
#             query = query.rstrip(',')
#         result = connection.execute(text(query))
#         data = [x._asdict() for x in result.all()]
#         return json.JSONEncoder().encode({"data": data})
    
@app.route('/resources/single_resource')
def resources():
    with engine.connect() as connection:
        name = request.args.get("id")
        query = ""

        if name:
            query = text('SELECT * FROM "Resources" WHERE id= '+"'" + str(name)+"'")
        
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
    
# @app.route('/resources/all_resources')
# def all_resources():
#     with engine.connect() as connection:
#         query = query = text('SELECT * FROM "Resources"')

#         result = connection.execute(query)
#         data = [x._asdict() for x in result.all()]
#         return json.JSONEncoder().encode({"data": data})

@app.route('/resources/all_resources')
def all_resources():
    search_query = request.args.get('search_query')
    sort = request.args.get('sort')
    with engine.connect() as connection:
        query = 'SELECT * FROM "Resources"'
        if search_query:
            query += ' WHERE name ILIKE :search_query OR location ILIKE :search_query OR hours ILIKE :search_query OR type ILIKE :search_query'
        if sort:
            descending = sort[0] == '-' 
            field = sort[1:] if descending else sort
            query += ' ORDER BY "{}" {}'.format(field, "DESC" if descending else "ASC")
        
        result = connection.execute(text(query), {'search_query': f'%{search_query}%'})
        data = [x._asdict() for x in result.all()]
        return json.JSONEncoder().encode({"data": data})    
    
# @app.route('/resources/all_resources_search')
# def all_resources_search():
#     search_query = request.args.get('search_query') # get search query from request params
#     with engine.connect() as connection:
#         if search_query:
#             query = text('SELECT * FROM "Resources" WHERE name ILIKE :search_query OR location ILIKE :search_query OR hours ILIKE :search_query OR type ILIKE :search_query OR description ILIKE :search_query')
#             result = connection.execute(query, {'search_query': f'%{search_query}%'})
#         else:
#             query = text('SELECT * FROM "Resources"')
#             result = connection.execute(query)
#         data = [x._asdict() for x in result.all()]
#         return json.JSONEncoder().encode({"data": data})

# @app.route('/resources/all_resources_sort')
# def all_resources_sort():
#     sorts = request.args.get('sort')
#     with engine.connect() as connection:
#         query = 'SELECT * FROM "Resources"'
#         if sorts:
#             for sort in sorts.split(","):
#                 descending = sort[0] == '-' 
#                 field = sort[1:] if descending else sort
#                 query += f' ORDER BY "{field}" {"DESC" if descending else "ASC"},'
#             query = query.rstrip(',')
#         result = connection.execute(text(query))
#         data = [x._asdict() for x in result.all()]
#         return json.JSONEncoder().encode({"data": data})
  