from bs4 import BeautifulSoup
from selenium import webdriver
import os
from dotenv import load_dotenv
from supabase import create_client

# Load environment variables from .env file
dotenv_path = os.path.join(os.path.dirname(__file__), '..', '.env')
load_dotenv(dotenv_path=dotenv_path)

# Grab .env keys
url = os.environ.get("SUPABASE_URL")
key = os.environ.get("SUPABASE_KEY")
google_key = os.environ.get("GOOGLE_API_KEY")


supabase = create_client(url, key)

records_to_insert = {}


def get_soup_and_driver(URL):
    options = webdriver.ChromeOptions()
    options.add_argument('--headless')
    options.add_experimental_option('excludeSwitches', ['enable-logging'])
    options.add_argument('log-level=3')
    driver = webdriver.Chrome(options=options)
    driver.get(URL)
    return BeautifulSoup(driver.page_source, 'html.parser'), driver

def parse_web_data(soup, driver, county):
    
    
    response = supabase.table("Resources").select("*").eq("county", county).execute()
    if len(response.data) >= 2:
        return
    class_boxes = soup.findAll("li")
    
    total = 0
    for card in class_boxes:
        card_name = card.find('a', class_='event-card-link')
        
        if total>=3:
            break

        if card_name and 'aria-label' in card_name.attrs and 'data-event-category' in card_name.attrs:
            card_details = card.find_all('p', class_='Typography_root__487rx #585163 Typography_body-md__487rx event-card__clamp-line--one Typography_align-match-parent__487rx')
            image_src = card.find('img', class_='event-card-image')
            real_title = card.find('h2', class_='Typography_root__487rx #3a3247 Typography_body-lg__487rx event-card__clamp-line--two Typography_align-match-parent__487rx')
            item_list = [None, None, None, None, None, None, None]
            item_list[0] = real_title.get_text() # Title
            item_list[1] = card_name['data-event-location'] # City, State
            item_list[2] = card_name['data-event-paid-status'] # Free or paid
            item_list[3] = card_name['data-event-category'] # Misc
            item_list[4] = card_details[0].get_text() # location
            item_list[5] = card_details[1].get_text() # Time

            if image_src:
                item_list[6] = image_src['src']  # image url
                link_to_event = card_name['href']


                # Store the record in the dictionary if it doesn't exist already
                if item_list[0] not in records_to_insert:

                    link_to_event = card_name['href']
                    soup_2, driver_2 = get_soup_and_driver(link_to_event)

                    location_info = soup_2.find('p', class_='location-info__address-text')
                    event_description_div = soup_2.find('div', id='event-description')
                    address_div = soup_2.find('div', class_='location-info__address')


                    if location_info and event_description_div:

                        paragraphs = event_description_div.find_all('p')
                        location_info_text = location_info.get_text() if location_info else None
                        addr = address_div.contents[1].strip()
                        if paragraphs and location_info_text:
                            event_description_text = '\n'.join([p.get_text() for p in paragraphs])

                            records_to_insert[item_list[0]] = {
                                "name": item_list[0],
                                "location": addr,
                                "map": 'https://www.google.com/maps/embed/v1/place?key={}&q={}'.format(google_key, addr),
                                "hours": item_list[5],
                                "website": link_to_event,
                                "type": "event",
                                "media": item_list[6],
                                "description": event_description_text,
                                "county": county
                            }
                            print(records_to_insert[item_list[0]])
                            
                            response = supabase.table("Resources").select("*").eq("name", item_list[0]).execute()
                            
                            if len(response.data) >= 1:
                                print(f"The county {item_list[0]} already exists in the table. Skipping insertion.")
                            else:
                                # Insert the new record if the county doesn't exist
                                print(f"Inserted new record for {item_list[0]}.")
                                supabase.table("Resources").insert(records_to_insert[item_list[0]]).execute()
                                total+=1


                    driver_2.quit()
    driver.quit()











# Get list of cities and counties
response = supabase.from_("FosterHomesPerCounty").select("city", "county").execute()

# Extract city and county values from the response and create separate lists
list_of_cities = []
list_of_counties = []

for row in response.data:
    city = row["city"]
    county = row["county"]
    list_of_cities.append(city)
    list_of_counties.append(county)

first = "https://www.eventbrite.com/d/tx--"
last = "/kids-events/"
for city, county in zip(list_of_cities, list_of_counties):
    
    url = first + city + last
    soup, driver = get_soup_and_driver(url)
    parse_web_data(soup, driver, county)
    # driver.quit()

