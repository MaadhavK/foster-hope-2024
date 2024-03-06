from dotenv import load_dotenv
import os
import requests
from supabase import create_client

# Load environment variables from .env file
dotenv_path = os.path.join(os.path.dirname(__file__), '..', '.env')
load_dotenv(dotenv_path=dotenv_path)


url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_KEY")
google_key = os.environ.get("GOOGLE_API_KEY")
engine_id = os.environ.get("ENGINE_ID")
img_engine_id = os.environ.get("IMG_SEARCH_ENGINE_ID")

supabase = create_client(url, key)


def get_county_orgs():
    #go through all counties
    response = supabase.table('FosterHomesPerCounty').select('county').execute()
    counties= list(row['county'] for row in response.data)
    for county in counties:
        #get all orgs within current county
        
    #go through all orgs
    response = supabase.table('Organizations').select('name').execute()
    orgs= list(row['name'] for row in response.data)
    for org in reversed(orgs):
        #get county they're in
        county_name = supabase.table('Organizations').select('county').eq('name', org).execute()
        #update county orgs to include
        supabase.table('Counties').update({'organizations': }).eq('name', county_name).execute()

