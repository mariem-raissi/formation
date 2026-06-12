import requests
url = "https://api.open-meteo.com/v1/forecast?latitude=36.8065&longitude=10.1815&current=temperature_2m,wind_speed_10m"

reponse=requests.get(url)
data=reponse.json()
i = data["current"]

print("temperature:", i["temperature_2m"])
print("vitesse du vent:",i["wind_speed_10m"])