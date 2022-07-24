import requests


page = requests.get("http://172.17.0.1:1234/") 


print(page.text)