import csv 
import json
etudiants = [
    {
        "nom": "Ben Ali",
        "prenom": "Ahmed",
        "age": 20,
        "moyenne": 15.5
    },
    {
        "nom": "Mansouri",
        "prenom": "Youssef",
        "age": 21,
        "moyenne": 14.25
    } ]
with open("etudiant.txt", "w" ) as fichier_txt:
    for e in etudiants:
        ligne = f"{e['nom']} {e['prenom']} | Age: {e['age']} | Moyenne: {e['moyenne']}\n"
        fichier_txt.write(ligne)

print("Fichier etudiant.txt créé avec succès.")

with open("etudiant.txt", "r" ) as fichier_txt:
    contenu = fichier_txt.read()
    print(contenu)
nouvel_etudiant = {
    "nom": "Trabelsi",
    "prenom": "Sarra",
    "age": 22,
    "moyenne": 16.75
}

with open("etudiant.txt", "a" ) as fichier_txt:
    ligne = f"{nouvel_etudiant['nom']} {nouvel_etudiant['prenom']} | Age: {nouvel_etudiant['age']} | Moyenne: {nouvel_etudiant['moyenne']}\n"
    fichier_txt.write(ligne)

print("Nouvel étudiant ajouté dans le fichier TXT.")

with open("etudiant.csv", "w" ) as fichier_csv:
    writer = csv.writer(fichier_csv)

    
    writer.writerow(["Nom", "Prénom", "Age", "Moyenne"])

     
    for e in etudiants:
        writer.writerow([e["nom"], e["prenom"], e["age"], e["moyenne"]])

print("Fichier etudiant.csv créé avec succès.")

with open("etudiant.csv", "r" ) as fichier_csv:
    reader = csv.reader(fichier_csv)

    for ligne in reader:
        print(ligne)

with open("etudiant.json", "w" ) as fichier_json:
    json.dump(etudiants, fichier_json )
with open("etudiant.json", "r" ) as fichier_json:
    donnees = json.load(fichier_json)    
