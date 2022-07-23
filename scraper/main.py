from bs4 import BeautifulSoup
import requests

print("start")

# URL = "https://realpython.github.io/fake-jobs/"
URL = 'http://localhost:1234'
page = requests.get("http://172.17.0.1:1234/") 


print(page.text)