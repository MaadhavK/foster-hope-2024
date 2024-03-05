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

supabase = create_client(url, key)

records_to_insert = {}

def get_soup_and_driver(URL):
    options = webdriver.ChromeOptions()
    options.add_experimental_option('excludeSwitches', ['enable-logging'])
    driver = webdriver.Chrome(options=options)
    driver.get(URL)
    return BeautifulSoup(driver.page_source, 'html.parser'), driver

def parse_web_data(soup, driver):
    class_boxes = soup.findAll("li")
    for card in class_boxes:
        card_name = card.find('a', class_='event-card-link')


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


                    if location_info and event_description_div:

                        paragraphs = event_description_div.find_all('p')
                        location_info_text = location_info.get_text() if location_info else None

                        if paragraphs and location_info_text:
                            event_description_text = '\n'.join([p.get_text() for p in paragraphs])

                            records_to_insert[item_list[0]] = {
                                "name": item_list[0],
                                "location": location_info_text,
                                "hours": item_list[5],
                                "website": link_to_event,
                                "type": "event",
                                "media": item_list[6],
                                "description": event_description_text
                            }
                            print(records_to_insert[item_list[0]])


                    driver_2.quit()
    driver.quit()





#Clear out table
supabase.table("Resources").delete().neq('name', '-1').execute()

#Get list of cities
response = supabase.from_("FosterHomesPerCounty").select("city").execute()


# Extract city values from the response and create a list
list_of_cities = set(row["city"] for row in response.data)


first = "https://www.eventbrite.com/d/tx--"
last = "/kids-events/"
for city in list_of_cities:
    url = first + city + last
    soup, driver = get_soup_and_driver(url)
    parse_web_data(soup, driver)
    #driver.quit()

# Insert records from the dictionary into Supabase
for record_name, record_data in records_to_insert.items():
    supabase.table("Resources").insert(record_data).execute()
