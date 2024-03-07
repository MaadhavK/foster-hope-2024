import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class GUITests(unittest.TestCase):
    def setUp(self) -> None:
        self.url = 'https://www.foster-hope.com/'
        options = webdriver.ChromeOptions()
        options.add_argument('--headless')
        options.add_experimental_option('excludeSwitches', ['enable-logging'])
        options.add_argument('--no-sandbox')
        options.add_argument("--disable-gpu")
        options.add_argument('--disable-dev-shm-usage')
        self.driver = webdriver.Chrome(options=options)
        self.driver.implicitly_wait(10)
        self.driver.get(self.url)
    
    def tearDown(self):
        self.driver.quit()
    
    # test site subpages
    def test_1(self): # about 
        driver = self.driver
        wait = WebDriverWait(driver, 10)
        navbar_toggle_button = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, 'navbar-toggler')))
        navbar_toggle_button.click()
        navbar = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, 'navbar-nav')))
        page_link = navbar.find_element(By.LINK_TEXT, 'About Us')
        page_link.click()
        
        self.assertEqual(driver.current_url, self.url + "about")
    
    def test_2(self): # about 
        driver = self.driver
        wait = WebDriverWait(driver, 10)
        navbar_toggle_button = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, 'navbar-toggler')))
        navbar_toggle_button.click()
        navbar = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, 'navbar-nav')))
        page_link = navbar.find_element(By.LINK_TEXT, 'Counties')
        page_link.click()
        
        self.assertEqual(driver.current_url, self.url + "counties")

    def test_3(self): # about 
        driver = self.driver
        wait = WebDriverWait(driver, 10)
        navbar_toggle_button = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, 'navbar-toggler')))
        navbar_toggle_button.click()
        navbar = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, 'navbar-nav')))
        page_link = navbar.find_element(By.LINK_TEXT, 'Organizations')
        page_link.click()
        
        self.assertEqual(driver.current_url, self.url + "organizations")
    def test_4(self): # about 
        driver = self.driver
        wait = WebDriverWait(driver, 10)
        navbar_toggle_button = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, 'navbar-toggler')))
        navbar_toggle_button.click()
        navbar = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, 'navbar-nav')))
        page_link = navbar.find_element(By.LINK_TEXT, 'Resources')
        page_link.click()
        
        self.assertEqual(driver.current_url, self.url + "resources")
    # def test_2(self): # counties
    #     driver = self.driver
    #     page_link = driver.find_element(By.LINK_TEXT, "Counties")
    #     page_link.click()
    #     self.assertEqual(driver.current_url, self.url+ "counties")
    
    # def test_3(self): # organizations
    #     driver = self.driver
    #     page_link = driver.find_element(By.LINK_TEXT, "Organizations")
    #     page_link.click()
    #     self.assertEqual(driver.current_url, self.url+ "organizations")
    
    # def test_4(self): # resources
    #     driver = self.driver
    #     page_link = driver.find_element(By.LINK_TEXT, "Resources")
    #     page_link.click()
    #     self.assertEqual(driver.current_url, self.url+ "resources")
    
    # # check for dynamic counts
    # def test_5(self): # counties
    #     driver = self.driver
    #     page_link = driver.find_element(By.LINK_TEST, "Counties")
    #     page_link.click()
    #     time.sleep(3) 
    #     text = driver.find_element(By.XPATH, "//*[contains(text(), 'Number of Instances')]")
    #     self.assertEqual(text.text, "Number of Instances: 97")
    
    # def test_6(self): # organizations
    #     driver = self.driver
    #     page_link = driver.find_element(By.LINK_TEST, "Organizations")
    #     page_link.click()
    #     time.sleep(3) 
    #     text = driver.find_element(By.XPATH, "//*[contains(text(), 'Number of Instances')]")
    #     self.assertEqual(text.text, "Number of Instances: 373")

    # def test_7(self): # resources
    #     driver = self.driver
    #     page_link = driver.find_element(By.LINK_TEST, "Resources")
    #     page_link.click()
    #     time.sleep(3) 
    #     text = driver.find_element(By.XPATH, "//*[contains(text(), 'Number of Instances')]")
    #     self.assertEqual(text.text, "Number of Instances: 405")

if __name__ == "__main__":
    unittest.main()

    