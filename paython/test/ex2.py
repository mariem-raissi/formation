import json 
import os
import re
fichier = "contacts.json"
def charger():
    if os.path.exists(fichier):
        with open(fichier,"r") as f:
            return json.load(f)
    return []
def sauvegarder (contacts ):
    with open(fichier, "w" ) as f:
        json.dump(contacts , f,  indent=4)       
def ajouter():
    nom=input("nom:")   
    phone=input("phone:")
    ph= r"^\d{8}$"
    p =   re.fullmatch(ph, phone)
    if p:
        print(phone)
    else:
        print("phne invalid") 
        return   
    contacts = charger() 
    contact={
        "nom":nom,
        "phone":phone
    }       
    contacts.append(contact) 
    sauvegarder (contacts )
ajouter()    
def afficher():
    contacts=charger()
    for contact in contacts:
        print(f"Nom : {contact['nom']} | Téléphone : {contact['phone']}")
afficher()        