from bs4 import BeautifulSoup
from selenium import webdriver
import os
import requests
from dotenv import load_dotenv
from supabase import create_client
from organizations import find_operation_hours
# get organizations list along with what county they are in
# go through each org's websites
# find diff resources

# Load environment variables from .env file
dotenv_path = os.path.join(os.path.dirname(__file__), '..', '.env')
load_dotenv(dotenv_path=dotenv_path)

# Grab .env keys
url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_KEY")
google_key = os.environ.get("GOOGLE_API_KEY")
engine_id = os.environ.get("ENGINE_ID")
supabase = create_client(url, key)

records_to_insert = {}

# get photo using name
def get_photo(name):
    print(name)
    img_link = None
    base_url = 'https://www.googleapis.com/customsearch/v1'
    params = {
       'key': google_key,
       'cx': engine_id,
       'q': name,
       'searchType': 'image',
       'imgSize': 'large'
    }
    img_response = requests.get(base_url, params=params)
    print(img_response.status_code)
    if img_response.status_code == 200:
        images = img_response.json()
        img_link = images['items'][0]['link']
    return img_link

# get website snippet description using name
def get_website_descr(name):
    base_url = 'https://www.googleapis.com/customsearch/v1'
    params = {
        'key': google_key,
        'cx': engine_id,
        'q': name
    }
    response = requests.get(base_url, params=params)
    if response.status_code == 200:
        results = response.json()
        if 'items' in results:
            aid_name = results['items'][0]
            aid_link = aid_name.get('link')
            aid_snippet = aid_name.get('snippet')
            return aid_link, aid_snippet
    return None, None

# get map url using place id
def get_map_link(placeid):
    link = None
    base_url = 'https://maps.googleapis.com/maps/api/place/details/json'
    params = {
        'place_id': placeid,
        'key': google_key
    }
    response = requests.get(base_url, params=params)
    if response.status_code == 200:
        data = response.json()
        results = data.get('result', [])
        link = results.get('url')
    print(link)
    return link

def find_resources(query, county):
    type = ""
    if "financial aid" in query:
        type = "financial aid"
    elif "mental health" in query:
        type = "mental health"
    print(type)
    base_url = 'https://maps.googleapis.com/maps/api/place/textsearch/json'
    params = {
        'query': query,
        'key': google_key
    }
    response = requests.get(base_url, params=params)
    if response.status_code == 200:
        results = response.json().get('results', [])
        for result in results:
            id = result.get('place_id')
            name = result.get('name')
            location = result.get('formatted_address')
            media = get_photo(name)
            hours = find_operation_hours(id)
            website, description = get_website_descr(name)
            map = 'https://www.google.com/maps/embed/v1/place?key={}&q={}'.format(google_key, location)
            print(map)
            # map = get_map_link(id)
            if name not in records_to_insert: # then add record if not already in dict
                    records_to_insert[name] = {
                        "name": name,
                        "location": location,
                        "type": type,
                        "media": media,
                        "hours": hours,
                        "website": website,
                        "description": description,
                        "county": county,
                        "map": map
                    }
                    print(f"inserted {type} {name} record")
    else:
        print(f"Error: {response.status_code} - {response.text}")

# def find_mental_health(query, county):
#     base_url = 'https://maps.googleapis.com/maps/api/place/textsearch/json'
#     params = {
#         'query': query,
#         'key': google_key
#     }
#     response = requests.get(base_url, params=params)
#     if response.status_code == 200:
#         results = response.json().get('results', [])
#         for result in results:

#     return None

# get list of counties
# counties_json = supabase.table('Counties').select('county').execute().data
# counties = [entry['county'] for entry in counties_json]

# query = "foster care mental heath resources in travis, TX"
# find_resources(query, "Travis")
# print(records_to_insert)
# query_faid = "foster care financial aid  in travis, TX"
# query_mh = "foster care mental health resources in travis, TX"
# find_resources(query_mh, "Travis")
# find_resources(query_faid, "Travis")
# print(records_to_insert)
# for county in counties:
#     # find scholarships
#     # find mental_health
#     pass