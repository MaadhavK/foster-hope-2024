import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By


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
    
    def test_about_us(self):
        driver = self.driver
        driver.find_element(By.LINK_TEXT, )

    