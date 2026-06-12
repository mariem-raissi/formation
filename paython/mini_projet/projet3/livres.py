liste=[]
def ajouter_livre(titre, auteur, annee):
    livre = {
        "titre": titre,
        "auteur": auteur,
        "annee": annee
    }
    liste.append(livre)
    print("Livre ajouté avec succès.")
def afficher():
   for i in liste:
     print(i)    