import csv
import json
with open ("produit.csv","w") as file:
    tab=["nom","prix","quantite"]
    liste=csv.DictWriter(file,fieldnames=tab)
    liste.writeheader()
    liste.writerow({"nom":"p1","prix":232,"quantite":4})
    liste.writerow({"nom":"p2","prix":56,"quantite":10})
    liste.writerow({"nom":"p3","prix":150,"quantite":7})
produits=[] 
with open("produit.csv","r") as f:
    liste=csv.DictReader(f)
    for i in liste:
        p= int(i["prix"])
        q=int(i["quantite"])
        total= p*q
        print("total;",total)
    produits.append({ "total":total }) 
        
with open("totaux.json","w")as fjson:
    
    json.dump(produits,fjson)             
 
     