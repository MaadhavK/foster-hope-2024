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
    driver = webdriver.Chrome()
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

                # Store the record in the dictionary if it doesn't exist already
                if item_list[0] not in records_to_insert:
                    records_to_insert[item_list[0]] = {
                        "name": item_list[0],
                        "location": item_list[1],
                        "hours": item_list[5],
                        "free-or-paid": item_list[2],
                        "type": "event",
                        "media": item_list[6]
                    }
                    print("Inserting record into Supabase:", item_list[0])
                else:
                    print("Record already exists in records_to_insert:", item_list[0])




#Clear out table
supabase.table("Resources").delete().neq('name', '-1').execute()

#Get list of cities
response = supabase.from_("FosterHomesPerCounty").select("city").execute()


# Extract county values from the response and create a list
list_of_cities = set(row["city"] for row in response.data)


first = "https://www.eventbrite.com/d/tx--"
last = "/kids-events/"
for city in list_of_cities:
    url = first + city + last
    soup, driver = get_soup_and_driver(url)
    parse_web_data(soup, driver)
    driver.quit()

# Insert records from the dictionary into Supabase
for record_name, record_data in records_to_insert.items():
    supabase.table("Resources").insert(record_data).execute()
