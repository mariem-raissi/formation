print("############# exercice 1 #########")
class Personne:
    def __init__(self,nom,age):
        self.nom=nom
        self.age=age
    def afficher(self):
        print(f"le nom est {self.nom} et age de {self.age} ans ")    
p1=Personne("sara",23)
p1.afficher()
print("########## exercice 2 ######")
class Rectangle:
    def __init__(self,largeur,hauteur):
        self.largeur=largeur
        self.hauteur=hauteur
    def surface(self):
        s=self.largeur * self.hauteur
        print(f"la surface d'un rectangle est: {s}")
    def perimetre(self):
        p= 2 * (self.largeur + self.hauteur) 
        print(f"le perimetre d'un rectangle est: {p}")       
r1=Rectangle(15,37) 
r1.surface()  
r1.perimetre()   
print("########## exercice 3 #####")
class CompteBancaire:
    def __init__(self,titulaire,solde):
        self.titulaire = titulaire
        self.solde = solde 
    def deposer(self,montant):
        if montant > 0:
             self.solde += montant
              
             print(f"{montant}   déposés avec succès.") 
    def retirer(self,montant):
        if montant > 0:
            self.solde -= montant
             
            print(f"{montant}   retirer avec succès.")    
    def afficher_solde(self): 
        print(f"le titulaire d'un  compte : {self.titulaire} est un solde de : {self.solde} DT ")
compte1=CompteBancaire("mohammed",2000)
compte1.afficher_solde()
compte1.deposer(500)
compte1.afficher_solde()
compte1.retirer(300)
compte1.afficher_solde()