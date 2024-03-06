from dotenv import load_dotenv
import os
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
    response = supabase.table('Counties').select('county').execute()
    counties= list(row['county'] for row in response.data)
    for county in counties:
        #get all orgs within current county
        orgs = supabase.table('Organizations').select('id').eq('county', county).execute()
        #make it a list
        # img.data[0].get('image') != None:
        orgs_list = [data.get('id') for data in orgs.data]
        supabase.table('Counties').update({'organizations': orgs_list}).eq('county', county).execute()

def get_org_resources():
    #go through all orgs 
    response = supabase.table('Organizations').select('id').execute()
    orgs= list(row['id'] for row in response.data)
    for org in orgs:
        #get corresponding county
        county = supabase.table('Organizations').select('county').eq('id', org).execute()
        county_name = county.data[0].get('county')
        #get the resources of that county
        resource = supabase.table('Counties').select('resources').eq('county', county_name).execute()
        resource_list = resource.data[0].get('resources')
        #set the resources of this org
        supabase.table('Organizations').update({'resources': resource_list}).eq('id', org).execute()

def get_resource_orgs():
    #go through all resources
    response = supabase.table('Resources').select('id').execute()
    resources = list(row['id'] for row in response)
    for resource in resources:
        #get corresponding addr
        county = supabase.table('Resources').select('county').eq('id', resource).execute()
        county_name = county.data[0].get('county')
        #get the orgs of that county
        org = supabase.table('Counties').select('organizations').eq('county', county_name).execute()
        org_list = org.data[0].get('organizations')
        #set orgs of this resource
        supabase.table('Resources').update({'organizations': org_list}).eq('id', resource).execute()
        
        


#get_county_orgs()
get_org_resources()
get_resource_orgs()