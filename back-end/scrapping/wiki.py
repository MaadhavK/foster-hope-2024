import os
import requests
import json
from dotenv import load_dotenv
from bs4 import BeautifulSoup

from supabase import create_client

# Load environment variables from .env file
dotenv_path = os.path.join(os.path.dirname(__file__), '..', '.env')
load_dotenv(dotenv_path=dotenv_path)

# Grab .env keys
url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_KEY")

wiki_key = os.environ.get("WIKI_KEY")

supabase = create_client(url, key)

def get_section_text(title: str, section_title: str):
    # First, get the section index based on the section title
    section_response = requests.get(
        'https://en.wikipedia.org/w/api.php',
        params={
            'action': 'parse',
            'format': 'json',
            'page': title,
            'prop': 'sections'
        }
    ).json()

    # Find the index of the desired section
    section_index = None
    if 'parse' in section_response:
        for section in section_response['parse']['sections']:
            if section['line'] == section_title:
                section_index = section['index']
                break

    if section_index is None:
        return None

    # Now, fetch the content of the section using its index
    content_response = requests.get(
        'https://en.wikipedia.org/w/api.php',
        params={
            'action': 'query',
            'format': 'json',
            'titles': title,
            'prop': 'extracts',
            'explaintext': True,
            'redirects': 1,
            'section': section_index  # specify the section by index
        }
    ).json()

    page = next(iter(content_response['query']['pages'].values()))
    if 'extract' in page:
        text = page['extract'].strip()
        # Find the end of the section by searching for the next section's header
        next_section_index = None
        for section in section_response['parse']['sections']:
            if section['index'] > section_index:
                next_section_index = section['index']
                break
        if next_section_index is not None:
            # Trim the text to include only the content of the current section
            return text
            text = text[:text.find("==", text.find(section_title) + len(section_title))]

            newline_index = text.find('\n')
            if newline_index != -1:
                # Keep the text from the beginning up to the first '\n'
                text = text[:newline_index]
                return text
    return None




def scrape_county_wiki_data():
    response = supabase.from_("FosterHomesPerCounty").select("county").execute()

    # Extract city values from the response and create a list
    list_of_counties = set(row["county"] for row in response.data)
    list_of_counties = ["Scurry"]

    for county in list_of_counties:
        county_info = get_section_text(county + ", Texas", "Geography")
        population_info = get_section_text(county + ", Texas", "Demographics")
        #print(f"County: {county}")
        print(f"Geography: {county_info}")
        #print(f"Demographics: {population_info}")
        print("--------------------")

scrape_county_wiki_data()





    
