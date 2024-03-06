import os
from supabase import create_client
from dotenv import load_dotenv


# Load environment variables from .env file
dotenv_path = os.path.join(os.path.dirname(__file__), '..', '.env')
load_dotenv(dotenv_path=dotenv_path)

# Grab .env keys
url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_KEY")

supabase = create_client(url, key)


def put_fosterkids_fosterhomes_to_counties_table():
    # Execute queries to fetch data from FosterHomesPerCounty and FosterKidsPerCounty
    response1 = supabase.from_("FosterHomesPerCounty").select("county", "number_of_homes").execute()
    response2 = supabase.from_("FosterKidsPerCounty").select("county", "number_of_foster_kids").execute()

    

    # Combine data from FosterHomesPerCounty and FosterKidsPerCounty
    combined_data = []
    for fhpc_entry in response1.data:
        for fkpc_entry in response2.data:
            if fhpc_entry["county"] == fkpc_entry["county"]:
                combined_entry = {
                    "county": fhpc_entry["county"],
                    "number_of_homes": fhpc_entry["number_of_homes"],
                    "number_of_foster_kids": fkpc_entry["number_of_foster_kids"]
                }
                combined_data.append(combined_entry)

    # Insert combined data into Counties table
    for entry in combined_data:
        response = supabase.table("Counties").select("*").eq("county", entry["county"]).execute()
        
        
        # Check if any records were found for the county
        if len(response.data) >= 1:
            print(f"The county {entry["county"]} already exists in the table. Skipping insertion.")
        else:
            # Insert the new record if the county doesn't exist
            supabase.table("Counties").insert(entry).execute()
            print(f"Inserted new record for {entry["county"]}.")


#def get_and_do_everything():
    # Get number of kids and number of homes in separate tables
    #fosterkidspercounty.send_api_request(supabase)
    #fosterhomespercounty.send_api_request(supabase)
    #fosterhomespercounty.delete_counties_not_in_both_tables(supabase)

    #put_fosterkids_fosterhomes_to_counties_table()
    
    # calling media here does not work
    #media.store_county_images(supabase)
    #media.store_county_images(supabase)
    #wiki.scrape_county_wiki_data(supabase)

#get_and_do_everything()



# This gets the number of orgs for each county

response = supabase.from_("Counties").select("county").eq('county').execute()

for county in response.data:
    
    countyname = county["county"]
    num = supabase.from_("Organizations").select("county").eq('county', countyname).execute()
    numOfOrgs = len(num.data)
    print(countyname)
    print(numOfOrgs)
    print("======================")
    supabase.table('Counties').update({'number_of_orgs': numOfOrgs}).eq('county', countyname).execute()
    
    
    

# index = 1
# for name in response.data:
#     supabase.table('Organizations').update({'id': index}).eq('county', name["name"]).execute()
#     index+=1




