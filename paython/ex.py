n=int(input("entrer un nombre: "))
def sommechiffre(n):
     
      if n == 0:
        return 0
      else:
        x = n % 10
        return sommechiffre(n // 10)+x
print(sommechiffre(n))        
         
       print("prix min:",min(prices)) 



       import requests
url="https://fakestoreapi.com/products"
reponse=requests.get(url)
data= reponse.json()
r =input("entrer le nom de produit:")
produit=[] 
for i in data:
  
    print("title:",i["title"])
    print("price:",i["price"])
    if r in i["title"]: 
     produit.append(i)
if produit:
    print("produit trouve ")
    for p in produit:
         print("Titre :", p["title"])
         print("Prix :", p["price"], "$")
    prix_min = min(produit, key=lambda x: x["price"])
    print("Titre :", prix_min["title"])
    print("Prix :", prix_min["price"], "$")
else:
    print("  Aucun produit trouvé")    
     
     