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

def organization_attributes(data):
    orgsList = []
    response = supabase.table("FosterKidsPerCounty").select("county").execute()
    counties = [entry['county'] for entry in response.data] # get county names


