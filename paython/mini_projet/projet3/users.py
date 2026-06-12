utilisateurs = []

def ajouter_utilisateur(nom, email):
    utilisateur = {
        "nom": nom,
        "email": email
    }
    utilisateurs.append(utilisateur)
    print("Utilisateur ajouté avec succès.")