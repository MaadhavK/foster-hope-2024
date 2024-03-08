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

def valid_county_num():
    response = supabase.table('Counties').select('county').execute()
    counties= list(row['county'] for row in response.data)
    ans = 0
    for county in counties:
        orgs = supabase.table('Counties').select('organizations').eq('county', county).execute()
        
        print(orgs.data[0].get('organizations'))
        print(len(orgs.data[0].get('organizations')))
        if(len(orgs.data[0].get('organizations'))) <= 0:
            continue
        resources = supabase.table('Counties').select('resources').eq('county', county).execute()
        if(len(resources.data[0].get('resources'))) <= 0:
            continue
        ans += 1
    print(ans)
    
def valid_org_num():
    response = supabase.table('Organizations').select('id').execute()
    orgs= list(row['id'] for row in response.data)
    ans = 0
    for org in orgs:
        resources = supabase.table('Organizations').select('resources').eq('id', org).execute()
        print(org)
        print(resources.data[0].get('resources'))
        print(len(resources.data[0].get('resources')))
        if(len(resources.data[0].get('resources'))) <= 0:
            continue
        ans += 1
    print(ans)

def valid_resource_num():
    response = supabase.table('Resources').select('id').execute()
    resources= list(row['id'] for row in response.data)
    ans = 0
    for r in resources:
        orgs = supabase.table('Resources').select('organizations').eq('id', r).execute()
        print(r)
        print(orgs.data[0].get('organizations'))
        print(len(orgs.data[0].get('organizations')))
        if(len(orgs.data[0].get('organizations'))) <= 0:
            continue
        ans += 1
    print(ans)

def remove_invalid_county():
    response = supabase.table('Counties').select('county').execute()
    counties= list(row['county'] for row in response.data)
    ans = 0
    for county in counties:
        orgs = supabase.table('Counties').select('organizations').eq('county', county).execute()
        if(len(orgs.data[0].get('organizations'))) <= 0:
            supabase.table('Counties').delete().eq('county', county).execute()
            continue
        resources = supabase.table('Counties').select('resources').eq('county', county).execute()
        if(len(resources.data[0].get('resources'))) <= 0:
            supabase.table('Counties').delete().eq('county', county).execute()
            continue
        ans += 1
    print(ans)

def remove_invalid_Organizations():
    response = supabase.table('Organizations').select('id').execute()
    orgs= list(row['id'] for row in response.data)
    ans = 0
    for org in orgs:
        resources = supabase.table('Organizations').select('resources').eq('id', org).execute()
        print(org)
        print(resources.data[0].get('resources'))
        print(len(resources.data[0].get('resources')))
        if(len(resources.data[0].get('resources'))) <= 0:
            supabase.table('Organizations').delete().eq('id', org).execute()
            continue
        ans += 1
    print(ans)

def remove_invalid_resources():
    response = supabase.table('Resources').select('id').execute()
    resources= list(row['id'] for row in response.data)
    ans = 0
    for r in resources:
        orgs = supabase.table('Resources').select('organizations').eq('id', r).execute()
        print(r)
        print(orgs.data[0].get('organizations'))
        print(len(orgs.data[0].get('organizations')))
        if(len(orgs.data[0].get('organizations'))) <= 0:
            supabase.table('Resources').delete().eq('id', r).execute()
            continue
        ans += 1
    print(ans)
    
#valid_resource_num()
#remove_invalid_county()
#remove_invalid_Organizations()
#remove_invalid_resources()