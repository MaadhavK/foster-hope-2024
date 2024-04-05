import unittest
import requests

api_url = "https://api.foster-hope.com/"


class TestingApiClass(unittest.TestCase):
    def test_1(self):  # check all counties
        response = requests.get(api_url + "counties/all_counties")
        self.assertEqual(response.status_code, 200)

        data = response.json().get("data", [])

        self.assertEqual(len(data), 97)

    def test_2(self):  # check all orgs
        response = requests.get(api_url + "orgs/all_orgs")
        self.assertEqual(response.status_code, 200)

        data = response.json().get("data", [])
        self.assertEqual(len(data), 373)

    def test_3(self):  # check all resources
        response = requests.get(api_url + "resources/all_resources")
        self.assertEqual(response.status_code, 200)

        data = response.json().get("data", [])
        self.assertEqual(len(data), 405)

    def test_4(self):  # check for single county
        response = requests.get(api_url + "counties/single_county?id=97")
        self.assertEqual(response.status_code, 200)

        data = response.json().get("data", [])
        self.assertEqual(data[0].get("id"), 97)
        self.assertEqual(data[0].get("county"), "Jack")

    def test_5(self):  # check for single organization
        response = requests.get(api_url + "orgs/single_org?id=100")
        self.assertEqual(response.status_code, 200)

        data = response.json().get("data", [])
        self.assertEqual(data[0].get("id"), 100)
        self.assertEqual(
            data[0].get("name"), "Forever Families Foster Care and Adoption"
        )

    def test_6(self):  # check for single resource
        response = requests.get(api_url + "resources/single_resource?id=100")
        self.assertEqual(response.status_code, 200)

        data = response.json().get("data", [])
        self.assertEqual(data[0].get("id"), 100)
        self.assertEqual(data[0].get("name"), "Camino Real Community Services")

    def test_7(self): # check county search for Harris
        response = requests.get(api_url + "counties/all_counties?search_query=Harris")
        self.assertEqual(response.status_code, 200)

        data = response.json().get("data", [])
        self.assertEqual(data[0].get("county"), "Harris")
    
    def test_8(self):  # check sort by number_of_foster_home for county
        response = requests.get(api_url + "counties/all_counties?sort=number_of_foster_kids")
        self.assertEqual(response.status_code, 200)

        data = response.json().get("data", [])
        self.assertEqual(data[0].get("number_of_foster_kids"), "10")
        self.assertEqual(data[1].get("number_of_foster_kids"), "1002")

    def test_9(self): # check org search for church
        response = requests.get(api_url + "orgs/all_orgs?search_query=Church")
        self.assertEqual(response.status_code, 200)

        data = response.json().get("data", [])
        self.assertEqual(data[0].get("name"), "Rescue Church")
        self.assertEqual(len(data), 1)
    
    def test_10(self): # check sort by ratig
        response = requests.get(api_url + "orgs/all_orgs?sort=rating")
        self.assertEqual(response.status_code, 200)

        data = response.json().get("data", [])
        self.assertEqual(data[0].get("rating"), 0.0)
        self.assertEqual(len(data), 373)
    
    def test_11(self): #check search for resources for family
        response = requests.get(api_url + "resources/all_resources?search_query=family")
        self.assertEqual(response.status_code, 200)

        data = response.json().get("data", [])
        self.assertEqual(data[0].get("name"), "Family Fun - Spring Break that Shines")
        self.assertEqual(data[0].get("type"), "event")
    
    def test_12(self): #check sort for resources for sort by name
        response = requests.get(api_url + "resources/all_resources?sort=name")
        self.assertEqual(response.status_code, 200)

        data = response.json().get("data", [])
        self.assertEqual(data[0].get("name"), "1 Archangel Foster and Adoption Agency")
        self.assertEqual(len(data), 405)




if __name__ == "__main__":
    unittest.main()
