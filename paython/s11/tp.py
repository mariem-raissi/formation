import requests

url = "https://fakestoreapi.com/products"

reponse = requests.get(url)
data = reponse.json()

r = input("Entrer le nom de produit : ") 

produit = []

for i in data:

    print("title:", i["title"])
    print("price:", i["price"])

    if r in i["title"].lower():
        produit.append(i)

if produit:

    print("  Produit trouvé ")

    for p in produit:
        print("Titre :", p["title"])
        print("Prix :", p["price"], "$")
        
    prix_min = min(produit, key=lambda x: x["price"])

    print("  Prix minimum :")
    print("Titre :", prix_min["title"])
    print("Prix :", prix_min["price"], "$")

else:
    print("  Aucun produit trouvé") 