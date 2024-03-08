import requests

def store_data_in_supabase(data,supabase):
    county_homes = {}  # Dictionary to store total homes per county
    county_region ={}  # Dictionary to store regions as well

    for entry in data:
        county = entry["county"]
        homes = int(entry["homes"])  # Convert homes to integer
        # Split the region field and ensure it contains at least two parts
        region=entry["region"]
        region_parts = entry["region"].split('-')
        if len(region_parts) >= 2:
            # Get the second part after splitting by '-'
            region = region_parts[1].strip()
        
        # Add homes to the total for the county
        county_homes[county] = county_homes.get(county, 0) + homes
        county_region[county] = region
    
    # Insert aggregated data into Supabase table
    for county, total_homes in county_homes.items():

        # Query to check if the county already exists in the table
        response = supabase.table("FosterHomesPerCounty").select("*").eq("county", county).execute()

        # Check if any records were found for the county
        if len(response.data) >= 1:
            print(f"The county {county} already exists in the table. Skipping insertion.")
        else:
            # Insert the new record if the county doesn't exist
            supabase.table("FosterHomesPerCounty").insert({"county": county, "number_of_homes": total_homes, "city": county_region[county]}).execute()
            print(f"Inserted new record for {county}.")


def send_api_request(supabase):
    # Define the API endpoint
    api_endpoint = 'https://data.texas.gov/resource/u4j8-y2ff.json'
    
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
            filtered_data = [{"county": item["county"], "homes": item["homes"], "region": item["region"]} for item in data if item["type_of_fad_home"] == "Foster/Adoptive Homes"]
            
            # Accumulate filtered data
            all_filtered_data.extend(filtered_data)
            
            # Increment offset for the next page
            offset += limit
        else:
            return f"Failed to retrieve data. Status code: {response.status_code}"
    
    # Store all filtered data in Supabase
    store_data_in_supabase(all_filtered_data, supabase)
    
    # Return a JSON response indicating success
    return "Data stored successfully in Supabase"



def delete_counties_not_in_both_tables(supabase):
    # Get unique counties present in FosterHomesPerCounty table
    homes_counties_response = supabase.table("FosterHomesPerCounty").select("county").execute()
    homes_counties = set(row["county"] for row in homes_counties_response.data)

    # Get unique counties present in FosterKidsPerCounty table
    kids_counties_response = supabase.table("FosterKidsPerCounty").select("county").execute()
    kids_counties = set(row["county"] for row in kids_counties_response.data)


    # Get counties that are present in one table but not in the other
    counties_only_in_homes_table = homes_counties - kids_counties
    counties_only_in_kids_table = kids_counties - homes_counties


    # Delete records from FosterHomesPerCounty table for counties not in FosterKidsPerCounty table
    for county in counties_only_in_homes_table:
        supabase.table("FosterHomesPerCounty").delete().eq("county", county).execute()

    # Delete records from FosterKidsPerCounty table for counties not in FosterHomesPerCounty table
    for county in counties_only_in_kids_table:
        supabase.table("FosterKidsPerCounty").delete().eq("county", county).execute()