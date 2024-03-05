import os
import requests
import re
from dotenv import load_dotenv
from bs4 import BeautifulSoup
from selenium import webdriver

from supabase import create_client

# Load environment variables from .env file
dotenv_path = os.path.join(os.path.dirname(__file__), '..', '.env')
load_dotenv(dotenv_path=dotenv_path)

# Grab .env keys
url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_KEY")

wiki_key = os.environ.get("WIKI_KEY")

supabase = create_client(url, key)

def get_soup_and_driver(URL):
    options = webdriver.ChromeOptions()
    options.add_experimental_option('excludeSwitches', ['enable-logging'])
    driver = webdriver.Chrome(options=options)
    driver.get(URL)
    return BeautifulSoup(driver.page_source, 'html.parser'), driver

def scrape_county_wiki_data():
    response = supabase.from_("FosterHomesPerCounty").select("county").execute()

    # Extract city values from the response and create a list
    list_of_counties = set(row["county"] for row in response.data)

    url ="https://en.wikipedia.org/wiki/List_of_counties_in_Texas"
    soup, driver = get_soup_and_driver(url)
        
    table = soup.find("table", class_="wikitable sortable jquery-tablesorter")
    county_boxes= soup.findAll("tr")
    for county in county_boxes:
            ref = county.find("th", scope="row")

            if ref:
                link_to_county = ref.find("a")
                if link_to_county and "href" in link_to_county.attrs:
                    
                    column_data = county.findAll("td")
                    if len(column_data)>=6:
                        
                        #Checking county_1(Tarrant County) and county_2(Tarrant )
                        county_1=link_to_county["title"].split(',')[0].strip()
                        county_2=link_to_county["title"].split(',')[0].strip().replace("County", "").strip()

                        if county_1 in list_of_counties or county_2 in list_of_counties:
                            
                            population = column_data[5].get_text().replace(',', '')
                            print(population)

                            url = "https://en.wikipedia.org"+link_to_county["href"]
                            soup2, driver2 = get_soup_and_driver(url)

                            all_paragraphs = soup2.find_all('p')

                            description=""
                            for paragraph in all_paragraphs:
                                
                                if county_1 in paragraph.get_text() or county_2 in paragraph.get_text():

                                    description = paragraph.get_text()
                                    description = re.sub(r'\[\d+\]', '', description)
                                    print(description)
                                    break
                        #Call supa base to store population and description



            
                    
            


scrape_county_wiki_data()
                
                


#scrape_county_wiki_data()





    
