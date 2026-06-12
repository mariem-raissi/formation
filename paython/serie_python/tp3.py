import requests
url="https://api.github.com/users/{username}"
username =input("enter le nom d’utilisateur GitHub ")
 
response=requests.get(url)
for i in response.json():
    print("nom:",i["nom"])
    print("nombre de repositories",i[])
    print("nombre de followers:",i[])