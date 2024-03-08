import requests

def store_data_in_supabase(data,supabase):
    county_foster_kids = {}  # Dictionary to store total number of foster kids per county

    for entry in data:
        county = entry["county"]
        kids = int(entry["sum_children_in_subcare"])  # Convert kids to integer
        
        # Add kids to the total for the county
        county_foster_kids[county] = county_foster_kids.get(county, 0) + kids

    # Insert aggregated data into Supabase table
    for county, total_kids in county_foster_kids.items():


        # Define the county you want to insert
        county_to_insert = "YourCountyName"

        # Query to check if the county already exists in the table
        response = supabase.table("FosterKidsPerCounty").select("*").eq("county", county_to_insert).execute()

        # Check if any records were found for the county
        if len(response.data) >= 1:
            print(f"The county {county_to_insert} already exists in the table. Skipping insertion.")
        else:
            # Insert the new record if the county doesn't exist
            supabase.table("FosterKidsPerCounty").insert({"county": county_to_insert, "number_of_foster_kids": total_kids}).execute()
            print(f"Inserted new record for {county_to_insert}.")

def send_api_request(supabase):
    # Define the API endpoint
    api_endpoint = 'https://data.texas.gov/resource/kgpb-mxxd.json'
    
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
            
            # Extract county and foster kids information
            filtered_data = [{"county": item["county"], "sum_children_in_subcare": item["sum_children_in_subcare"]} for item in data if item["foster_care"] == "Foster Care"]
            
            # Accumulate filtered data
            all_filtered_data.extend(filtered_data)
            
            # Increment offset for the next page
            offset += limit
        else:
            return f"Failed to retrieve data. Status code: {response.status_code}"
    
    # Store all filtered data in Supabase
    store_data_in_supabase(all_filtered_data,supabase)
    
    # Return a JSON response indicating success
    return "Data stored successfully in Supabase"