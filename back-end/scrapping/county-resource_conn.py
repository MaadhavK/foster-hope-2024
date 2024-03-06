import os
from supabase import create_client, Client
import requests
import json
from dotenv import load_dotenv
from openai import OpenAI

# Load environment variables from .env file
dotenv_path = os.path.join(os.path.dirname(__file__), '..', '.env')
load_dotenv(dotenv_path=dotenv_path)


url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_KEY")
engine_id = os.environ.get("ENGINE_ID")

# Set your OpenAI API key
open_ai_key = os.environ.get("OPEN_AI_KEY")

client = OpenAI(api_key=open_ai_key)


# For every county
#   Iterate through resources
#   If resources.county = county, add uuid to resources list
#   Put resources list into db

def county_resource_conn(supabase):
    county_response = supabase.table("Counties").select('name', 'id').execute()
    counties = list((row['id'],row['name']) for row in county_response.data)
    resource_response = supabase.table("Resources").select('id', 'county').execut()
    resources = list((row['id'], row['location']) for row in resource_response.data)

    resource_counties = []
    
    for resource in resources: 
        prompt_text = "What Texas county is {} in? Provide only the county name and nothing else.".format(resource[1])
        response =  client.chat.completions.create(
        model="gpt-3.5-turbo",  # You can use other engines as well
        messages=[
            {"role": "user", "content": prompt_text}
        ])
        resource_counties.append(resource[0], response.choices[0].message.content)

    for county in reversed(counties):
        count = 0
        resource_conn = []
        for resource in resource_counties:
            if count >= 5:
                break
            if county[1].casefold() == resource[1].casefold():
                resource_conn.append(resource[0])
                count+=1
    
        supabase.table('Counties').update({'resources': str(resource_conn)[1:-1]}).eq('id', county[0]).execute()
        
    


