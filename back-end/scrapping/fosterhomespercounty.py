from dotenv import load_dotenv
import os
#from flask import Flask
import requests
import json
from dotenv import load_dotenv

from supabase import create_client

# Load environment variables from .env file
dotenv_path = os.path.join(os.path.dirname(__file__), '..', '.env')
load_dotenv(dotenv_path=dotenv_path)

# Grab .env keys
url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_KEY")

supabase = create_client(url, key)


#app = Flask(__name__)

def store_data_in_supabase(data):
    county_homes = {}  # Dictionary to store total homes per county

    for entry in data:
        county = entry["county"]
        homes = int(entry["homes"])  # Convert homes to integer
        
        # Add homes to the total for the county
        county_homes[county] = county_homes.get(county, 0) + homes

    # Insert aggregated data into Supabase table
    for county, total_homes in county_homes.items():
        supabase.table("FosterHomesPerCounty").insert({"county": county, "number_of_homes": total_homes}).execute()

#@app.route('/')
def send_api_request():
    # Define the API endpoint
    api_endpoint = 'https://data.texas.gov/resource/u4j8-y2ff.json'

    # Clear out supabase table before we populate it
    supabase.table("FosterHomesPerCounty").delete().neq('county', '-1').execute()
    
    # Initialize offset and limit
    offset = 0
    limit = 1000
    
    # List to accumulate filtered data
    all_filtered_data = []
    
    while True:
        # Send a GET request to the API endpoint with the parameters
        response = requests.get(f"{api_endpoint}?$limit={limit}&$offset={offset}")

        if response.status_code == 200:
            # Parse JSON response
            data = response.json()
            
            # If no data is returned, break out of the loop
            if not data:
                break
            
            # Extract county and foster homes information
            filtered_data = [{"county": item["county"], "homes": item["homes"]} for item in data if item["type_of_fad_home"] == "Foster/Adoptive Homes"]
            
            # Accumulate filtered data
            all_filtered_data.extend(filtered_data)
            
            # Increment offset for the next page
            offset += limit
        else:
            return f"Failed to retrieve data. Status code: {response.status_code}"
    
    # Store all filtered data in Supabase
    store_data_in_supabase(all_filtered_data)
    
    # Return a JSON response indicating success
    return "Data stored successfully in Supabase"
send_api_request()
#if __name__ == '__main__':
#    app.run()