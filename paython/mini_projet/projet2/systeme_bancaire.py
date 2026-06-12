class Compte:
    def __init__ (self, titulaire, solde ):
        self.titulaire = titulaire
        self.solde = solde

    def deposer(self, montant):
        self.solde += montant
    def retirer(self, montant):
        if montant <= self.solde:
            self.solde -= montant
            print(f"Retrait de {montant} effectué.")
    def afficher_solde(self):
        print("Titulaire :", self.titulaire)
        print("Solde :", self.solde)
class CompteCourant(Compte):
    def __init__ (self, titulaire, solde , decouvert ):
        super().__init__(titulaire, solde)
        self.decouvert = decouvert 
        
    def retirer(self, montant):
        if self.solde + self.decouvert >= montant:
            self.solde -= montant
        else:
            print("Retrait refusé  ")  
class CompteEpargne(Compte):
    def __init__(self, titulaire, solde , taux ):
        super().__init__(titulaire, solde)
        self.taux = taux  
    def ajout_interet(self):
        interet=self.solde * self.taux
        self.solde += interet
        print(f"interet ajouter{interet}")  
c1 = Compte("ali",2000)
c1.deposer(500)
c1.retirer(300)
c1.afficher_solde()                 
c2=CompteCourant("sara",3000, 120 )
c2.deposer(100)
c2.retirer(120)
c2.afficher_solde()     
c3 = CompteEpargne ("ahmed",1500,0.02 )
c3.ajout_interet() 
c3.afficher_solde()   