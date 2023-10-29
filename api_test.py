import requests

url = "http://localhost:8000"
course = "main course"
endpoint = f"/foods/{course}"
response = requests.get(f"{url}{endpoint}")
if response.status_code ==200:
    print("Success")
    print(response.text)
else:
    print(f"the request failed with status code {response.status_code}")


# second api test 
food ="Kabiraji"
endpoint2= f"/food-details/{course}/{food}" 
response2 = requests.get(f"{url}{endpoint2}")
if response2.status_code ==200:
    print("Second enpoint Success")
    print(response2.text)
else:
    print(f"the second endpoint request failed with status code {response2.status_code}")