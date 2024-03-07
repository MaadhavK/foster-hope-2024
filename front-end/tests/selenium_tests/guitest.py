import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains

class GUITests(unittest.TestCase):
    def setUp(self) -> None:
        self.url = 'https://develop.d38oxs0wh0o0ma.amplifyapp.com/'
        options = webdriver.ChromeOptions()
        options.add_argument('--headless')
        options.add_experimental_option('excludeSwitches', ['enable-logging'])
        options.add_argument('--no-sandbox')
        options.add_argument("--disable-gpu")
        options.add_argument('--disable-dev-shm-usage')
        self.driver = webdriver.Remote(command_executor='http://selenium__standalone-chrome:4444/wd/hub', options=options)
        self.driver.implicitly_wait(10)
        self.driver.get(self.url)
    
    def tearDown(self):
        self.driver.quit()
    
    def test_1(self): # about 
        driver = self.driver
        wait = WebDriverWait(driver, 10)
        navbar_toggle_button = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, 'navbar-toggler')))
        navbar_toggle_button.click()
    
        # Locating the parent container of the navigation links
        navbar = wait.until(EC.visibility_of_element_located((By.ID, 'responsive-navbar-nav')))
    
        # Finding the page link within the parent container
        page_link = navbar.find_element(By.LINK_TEXT, 'About Us')
        page_link.click()
    
        self.assertEqual(driver.current_url, self.url + "about")
    
    def test_2(self): # counties 
        driver = self.driver
        wait = WebDriverWait(driver, 10)
        navbar_toggle_button = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, 'navbar-toggler')))
        navbar_toggle_button.click()
        navbar = wait.until(EC.visibility_of_element_located((By.ID, 'responsive-navbar-nav')))
        page_link = navbar.find_element(By.LINK_TEXT, 'Counties')
        page_link.click()
    
        self.assertEqual(driver.current_url, self.url + "counties")
        
    def test_3(self): # about 
        driver = self.driver
        wait = WebDriverWait(driver, 10)
        navbar_toggle_button = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, 'navbar-toggler')))
        navbar_toggle_button.click()
        navbar = wait.until(EC.visibility_of_element_located((By.ID, 'responsive-navbar-nav')))
        page_link = navbar.find_element(By.LINK_TEXT, 'Organizations')
        page_link.click()
        
        self.assertEqual(driver.current_url, self.url + "organizations")
        
    def test_4(self): # about 
        driver = self.driver
        wait = WebDriverWait(driver, 10)
        navbar_toggle_button = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, 'navbar-toggler')))
        navbar_toggle_button.click()
        navbar = wait.until(EC.visibility_of_element_located((By.ID, 'responsive-navbar-nav')))
        page_link = navbar.find_element(By.LINK_TEXT, 'Resources')
        page_link.click()
        
        self.assertEqual(driver.current_url, self.url + "resources")
    
    def test_counties_instance(self):
        driver = self.driver
        wait = WebDriverWait(driver, 10)
    
        # Clicking on "Counties" link
        navbar_toggle_button = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, 'navbar-toggler')))
        navbar_toggle_button.click()
        navbar = wait.until(EC.visibility_of_element_located((By.ID, 'responsive-navbar-nav')))
        page_link = navbar.find_element(By.LINK_TEXT, 'Counties')
        page_link.click()
    
        # Locating the card containing the "Read More" button for any county instance
        card = wait.until(EC.visibility_of_element_located((By.XPATH, '//div[contains(@class, "card")]')))
    
        # Locating the "Read More" button within the card
        read_more_button = card.find_element(By.XPATH, './/a[contains(@href, "counties/") and contains(text(), "Read More")]')
    
        # Scroll to the "Read More" button
        driver.execute_script("arguments[0].scrollIntoView();", read_more_button)
        
        # Use ActionChains to move the mouse to the button's location
        actions = ActionChains(driver)
        actions.move_to_element(read_more_button).perform()
        
        # Logging the button location and viewport size
        print("Button location:", read_more_button.location)
        print("Viewport size:", driver.execute_script("return [window.innerWidth, window.innerHeight];"))
    
        # Clicking the "Read More" button
        read_more_button.click()
        
        # Check if the URL has changed
        new_url = driver.current_url
        print("Current URL:", new_url)
    
        # Checking if the population text is present
        population_text = None
        try:
             population_text = wait.until(EC.visibility_of_element_located((By.XPATH, '//div[contains(@style, "text-align:left") and contains(text(), "Population:")]/following-sibling::div')))
        except:
            pass
    
        self.assertIsNotNone(population_text, "Population text not found on the page")
    
    def test_organizations_instance(self):
        driver = self.driver
        wait = WebDriverWait(driver, 10)
    
        # Clicking on "Counties" link
        navbar_toggle_button = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, 'navbar-toggler')))
        navbar_toggle_button.click()
        navbar = wait.until(EC.visibility_of_element_located((By.ID, 'responsive-navbar-nav')))
        page_link = navbar.find_element(By.LINK_TEXT, 'Organizations')
        page_link.click()
    
        # Locating the card containing the "Read More" button for any county instance
        card = wait.until(EC.visibility_of_element_located((By.XPATH, '//div[contains(@class, "card")]')))
    
        # Locating the "Read More" button within the card
        read_more_button = card.find_element(By.XPATH, './/a[contains(@href, "organizations/") and contains(text(), "Read More")]')
    
        # Scroll to the "Read More" button
        driver.execute_script("arguments[0].scrollIntoView();", read_more_button)
        
        # Use ActionChains to move the mouse to the button's location
        actions = ActionChains(driver)
        actions.move_to_element(read_more_button).perform()
        
        # Logging the button location and viewport size
        print("Button location:", read_more_button.location)
        print("Viewport size:", driver.execute_script("return [window.innerWidth, window.innerHeight];"))
    
        # Clicking the "Read More" button
        read_more_button.click()
        
        # Check if the URL has changed
        new_url = driver.current_url
        print("Current URL:", new_url)
    
        # Checking if the todays hours text is present
        todays_hours = None
        try:
            todays_hours = wait.until(EC.visibility_of_element_located((By.XPATH, '//div[contains(@style, "text-align:left") and contains(b, "Today\'s Hours:")]/following-sibling::div')))
        except:
            pass
    
        self.assertIsNotNone(todays_hours, "Today's Hours text not found on the page")
    
    def test_resources_instance(self):
        driver = self.driver
        wait = WebDriverWait(driver, 10)
    
        # Clicking on "Counties" link
        navbar_toggle_button = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, 'navbar-toggler')))
        navbar_toggle_button.click()
        navbar = wait.until(EC.visibility_of_element_located((By.ID, 'responsive-navbar-nav')))
        page_link = navbar.find_element(By.LINK_TEXT, 'Resources')
        page_link.click()
    
        # Locating the card containing the "Read More" button for any county instance
        card = wait.until(EC.visibility_of_element_located((By.XPATH, '//div[contains(@class, "card")]')))
    
        # Locating the "Read More" button within the card
        read_more_button = card.find_element(By.XPATH, './/a[contains(@href, "resources/") and contains(text(), "Read More")]')
    
        # Scroll to the "Read More" button
        driver.execute_script("arguments[0].scrollIntoView();", read_more_button)
        
        # Use ActionChains to move the mouse to the button's location
        actions = ActionChains(driver)
        actions.move_to_element(read_more_button).perform()
        
        # Logging the button location and viewport size
        print("Button location:", read_more_button.location)
        print("Viewport size:", driver.execute_script("return [window.innerWidth, window.innerHeight];"))
    
        # Clicking the "Read More" button
        read_more_button.click()
        
        # Check if the URL has changed
        new_url = driver.current_url
        print("Current URL:", new_url)
    
        # Checking if the event text is present
        event_type = None
        try:
            event_type = wait.until(EC.visibility_of_element_located((By.XPATH, '//div[contains(@style, "text-align:left") and contains(b, "Type:")]/following-sibling::div')))
        except:
            pass
    
        self.assertIsNotNone(event_type, "Today's Hours text not found on the page")
        
    def test_resources_website(self):
        driver = self.driver
        wait = WebDriverWait(driver, 10)
        
        original_url = driver.current_url
    
        # Clicking on "Counties" link
        navbar_toggle_button = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, 'navbar-toggler')))
        navbar_toggle_button.click()
        navbar = wait.until(EC.visibility_of_element_located((By.ID, 'responsive-navbar-nav')))
        page_link = navbar.find_element(By.LINK_TEXT, 'Resources')
        page_link.click()
    
        # Locating the card containing the "Read More" button for any county instance
        card = wait.until(EC.visibility_of_element_located((By.XPATH, '//div[contains(@class, "card")]')))
    
        # Locating the "Read More" button within the card
        read_more_button = card.find_element(By.XPATH, './/a[contains(@href, "resources/") and contains(text(), "Read More")]')
    
        # Scroll to the "Read More" button
        driver.execute_script("arguments[0].scrollIntoView();", read_more_button)
        
        # Use ActionChains to move the mouse to the button's location
        actions = ActionChains(driver)
        actions.move_to_element(read_more_button).perform()
        
        # Logging the button location and viewport size
        print("Button location:", read_more_button.location)
        print("Viewport size:", driver.execute_script("return [window.innerWidth, window.innerHeight];"))
    
        # Clicking the "Read More" button
        read_more_button.click()
        
        print(driver.current_url)
        # Waiting before we get website button
        


        # Wait for the button element to be visible
        button = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//a[contains(text(), 'Website')]")))
        
        driver.execute_script("arguments[0].scrollIntoView();", button)
        actions = ActionChains(driver)
        actions.move_to_element(button).perform()
        button.click()

        # Check if the URL has changed
        new_url = driver.current_url
        print("Original URL:", original_url)
        print("New URL:", new_url)
        self.assertNotEqual(original_url, new_url, "URL did not change after clicking the Website button")
        
    def test_resources_countylink(self):
        driver = self.driver
        wait = WebDriverWait(driver, 10)
        
        original_url = driver.current_url
    
        # Clicking on "Counties" link
        navbar_toggle_button = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, 'navbar-toggler')))
        navbar_toggle_button.click()
        navbar = wait.until(EC.visibility_of_element_located((By.ID, 'responsive-navbar-nav')))
        page_link = navbar.find_element(By.LINK_TEXT, 'Resources')
        page_link.click()
    
        # Locating the card containing the "Read More" button for any county instance
        card = wait.until(EC.visibility_of_element_located((By.XPATH, '//div[contains(@class, "card")]')))
    
        # Locating the "Read More" button within the card
        read_more_button = card.find_element(By.XPATH, './/a[contains(@href, "resources/") and contains(text(), "Read More")]')
    
        # Scroll to the "Read More" button
        driver.execute_script("arguments[0].scrollIntoView();", read_more_button)
        
        # Use ActionChains to move the mouse to the button's location
        actions = ActionChains(driver)
        actions.move_to_element(read_more_button).perform()
        
        # Logging the button location and viewport size
        print("Button location:", read_more_button.location)
        print("Viewport size:", driver.execute_script("return [window.innerWidth, window.innerHeight];"))
    
        # Clicking the "Read More" button
        read_more_button.click()
        
        print(driver.current_url)
        # Waiting before we get website button
        

        # Assuming the button is within a specific element, like a card:

        
        
        # Wait for the button element to be visible
        button = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//a[contains(text(), 'county')]")))
        
        driver.execute_script("arguments[0].scrollIntoView();", button)
        actions = ActionChains(driver)
        actions.move_to_element(button).perform()
        button.click()

        # Check if the URL has changed
        new_url = driver.current_url
        print("Original URL:", original_url)
        print("New URL:", new_url)
        self.assertNotEqual(original_url, new_url, "URL did not change after clicking the Website button")
        
    def test_organizations_countylink(self):
        driver = self.driver
        wait = WebDriverWait(driver, 10)
        
        original_url = driver.current_url
    
        # Clicking on "Counties" link
        navbar_toggle_button = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, 'navbar-toggler')))
        navbar_toggle_button.click()
        navbar = wait.until(EC.visibility_of_element_located((By.ID, 'responsive-navbar-nav')))
        page_link = navbar.find_element(By.LINK_TEXT, 'Organizations')
        page_link.click()
    
        # Locating the card containing the "Read More" button for any county instance
        card = wait.until(EC.visibility_of_element_located((By.XPATH, '//div[contains(@class, "card")]')))
    
        # Locating the "Read More" button within the card
        read_more_button = card.find_element(By.XPATH, './/a[contains(@href, "organizations/") and contains(text(), "Read More")]')
    
        # Scroll to the "Read More" button
        driver.execute_script("arguments[0].scrollIntoView();", read_more_button)
        
        # Use ActionChains to move the mouse to the button's location
        actions = ActionChains(driver)
        actions.move_to_element(read_more_button).perform()
        
        # Logging the button location and viewport size
        print("Button location:", read_more_button.location)
        print("Viewport size:", driver.execute_script("return [window.innerWidth, window.innerHeight];"))
    
        # Clicking the "Read More" button
        read_more_button.click()
        
        print(driver.current_url)
        # Waiting before we get website button
        


        # Wait for the button element to be visible
        button = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//a[contains(text(), 'County')]")))
        
        driver.execute_script("arguments[0].scrollIntoView();", button)
        actions = ActionChains(driver)
        actions.move_to_element(button).perform()
        button.click()

        # Check if the URL has changed
        new_url = driver.current_url
        print("Original URL:", original_url)
        print("New URL:", new_url)
        self.assertNotEqual(original_url, new_url, "URL did not change after clicking the Website button")
    
        
if __name__ == "__main__":
    unittest.main()
