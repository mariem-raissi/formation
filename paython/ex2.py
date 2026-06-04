class Etudiant:
    def __init__(self,nom,prenom,note):
        self.nom=nom 
        self.prenom=prenom 
        self.note=note
    def afficher(self):
        print("nom:",self.nom)   
        print("prenom:",self.prenom)
        print("note:",self.note) 
    def est_admis(self):
        if self.note>= 10 
e1=Etudiant("sara","benfoulen",13)  
e1.Afficher()          