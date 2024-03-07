import unittest
import requests

api_url = 'https://api.foster-hope.com/'

class TestingApiClass(unittest.TestCase):
    def test_1(self): # check all counties 
        response = requests.get(api_url+"counties/all_counties")
        self.assertEqual(response.status_code, 200)

        data = response.json()
        self.assertEqual(len(data), 200)
    
    def test_2(self): # check all orgs
        response = requests.get(api_url+"orgs/all_orgs")
        self.assertEqual(response.status_code, 200)

        data = response.json()
        self.assertEqual(len(data), 475)

    def test_3(self): # check all resources
        response = requests.get(api_url+"resources/all_resources")
        self.assertEqual(response.status_code, 200)

        data = response.json()
        self.assertEqual(len(data), 586)

    def test_4(self): # check for single county
        response = requests.get(api_url+"counties/single_county?id=100")
        self.assertEqual(response.status_code, 200)

        data = response.json()
        self.assertEqual(data['id'], 100)
        self.assertEqual(data['county'], "Jim Wells")
    
    def test_5(self): # check for single organization
        response = requests.get(api_url+"orgs/single_org?id=100")
        self.assertEqual(response.status_code,  200)

        data = response.json()
        self.assertEqual(data['id'], 100)
        self.assertEqual(data['name'], "Forever Families Foster Care and Adoption")

    def test_6(self):
        response = requests.get(api_url+"resources/single_resource?id=100")
        self.assertEqual(response.status_code, 200)

        data = response.json()
        self.assertEqual(data['id'], 100)
        self.assertEqual(data['name'], "Camino Real Community Services")

if __name__ == '__main__':
    unittest.main()
