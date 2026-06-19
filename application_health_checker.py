import requests

url = "https://opensource-demo.orangehrmlive.com"

try:
    response = requests.get(url)

    if response.status_code == 200:
        print("Application Status: UP")
    else:
        print("Application Status: DOWN")
except:
    print("Application Status: DOWN")
