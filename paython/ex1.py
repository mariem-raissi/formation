x=int(input("entrer un nombre:"))
s= 0
 
for i in  range(x+1):
       
        if i % 2 == 0:
            print(i)
            s=s+i 
print (s)
#################3
def moyenne(notes):
    return sum(notes) / len(notes)

notes = [12, 15, 18, 10, 20]

print(moyenne(notes))      
##################
personne = {
    "nom": "Ali",
    "prenom": "Ahmed",
    "age": 20
}
for c,v in personne.items():
    print(c, ":", v)
#############
try:
    a = float(input("entrer le premier nombre : "))
    b = float(input("entrer le deuxième nombre : "))

    print("Résultat :", a / b)

except ZeroDivisionError:
    print("Impossible de diviser par zéro") 
###############
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
        if self.note>= 10 :
            return True
        else:
            return False    
e1=Etudiant("sara","benfoulen",9)  
e1.afficher()  
print(e1.est_admis() )       
    