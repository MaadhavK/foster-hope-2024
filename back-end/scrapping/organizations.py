from dotenv import load_dotenv
import os
import requests
from supabase import create_client

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
    
def find_operation_hours(placeid):
    base_url = 'https://maps.googleapis.com/maps/api/place/details/json'
    params = {
        'place_id': placeid,
        'key': google_key
    }
    response = requests.get(base_url, params=params)
    if response.status_code == 200:
        data = response.json()
        results = data.get('result', [])
        hours = results.get('opening_hours')
        if not hours:
            hours = None
        else:
            hours = hours.get('weekday_text')
        return hours
    return None


def find_org_info(query, county):
    # print("in find_place")
    base_url = 'https://maps.googleapis.com/maps/api/place/textsearch/json'
    params = {
        'query': query,
        'key': google_key
    }
    response = requests.get(base_url, params=params)
    # print(response.status_code)
    if response.status_code == 200:
        data = response.json()
        results = data.get('results', [])
        # print(results)
        for result in results:
            org_id = result.get('place_id')
            org_name = result.get('name')
            org_type = result.get('types')
            org_rating = result.get('rating')
            org_hours = find_operation_hours(org_id)
            org_location = result.get('formatted_address')
            if all(var is not None for var in (org_id, org_name, org_type, org_rating, org_hours, org_location)): # make sure result has all attributes
                if org_name not in records_to_insert: # then add record if not already in dict
                    records_to_insert[org_name] = {
                        "name": org_name,
                        "type": org_type,
                        "rating": org_rating,
                        "operation_hours": org_hours,
                        "location": org_location,
                        "image": None,
                        "map": None,
                        "county": county
                    }
                    
    else:
        print(f"Error: {response.status_code} - {response.text}")
    
        
#Clear out table
# supabase.table("Organizations").delete().neq('name', '-1').execute()

# get list of counties
# counties_json = supabase.table('Counties').select('county').execute().data
# counties = [entry['county'] for entry in counties_json]

# test for one county
# find_org_info("Foster Care organizations in Austin, TX", "Austin")
# for record in records_to_insert.values():
#     print(record)


# get records for each county
# for county in counties: # go through counties and find info on the various orgs within that county
#     print(county)
#     find_org_info(f"Foster Care organizations in {county}, TX", county)

# for county in counties:
#     if county not in records_to_insert.values():
#         print(county)
# uncomment to populate supabase table
# for record_name, record_data in records_to_insert.items(): # input record data into supabase
#     supabase.table("Organizations").insert(record_data).execute()



