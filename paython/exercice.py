class CompteBancaire:
  def __init__(self,nom,solde):
    self.nom=nom
    self.solde=solde
  def afficher_solde(self):
    print(f"le solde du compte de {self.nom} est de {self.solde}") 
  def deposer(self, montant):
        if montant > 0:
            self.solde += montant
            print(f"{montant}   déposés avec succès.")
  def retirer(self, montant):
        if montant > 0:
                self.solde -= montant
                print(f"{montant}  retirés avec succès.")       
  
compte = CompteBancaire("ahmed",2000)   
compte.afficher_solde()    
compte.deposer(600)
compte.retirer(200)