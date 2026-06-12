print("####### excercice 1 ############")
fruits=["pomme","fraise","banane","kiwi","peche"]
fruits.append("mangue")  
print(fruits) 
fruits.pop(0)
print(fruits)
print(fruits[2])
fruits.sort()    # Trier la liste par ordre alphabétique.
print(fruits)
print(len(fruits)) #Afficher la longueur de la liste.
print("###### exercice 2 ###########")
nombres=[1,4,89,56,12,3,7,34,8,10]
for i in nombres:
    if i % 2 == 0:
        print("nombres pairs:",i)
somme = 0
for i in nombres:
    if i!= 0:
     somme +=i
print("la somme des element:",somme)
indexmin=nombres[0]
indexmax=nombres[0]
for a in nombres:
    if a > indexmax:
       indexmax =  a
    if a < indexmin:
        indexmin = a    
print("le maximum:",indexmax) 
print("le minimum:",indexmin) 
carre=[]
for i in nombres:
    if i != 0:
       s= i ** 2
       carre.append(s)
  
print(carre)      
print("############# exercice 3 ##########") 
semaine = ("lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche") 
print("le premier jour:",semaine[0])   
print("le derniere jour:",semaine[-1]) 
compteur= 0
for i in semaine:
     if i == "dimanche":
        print("le jour dimanche est existe dans le tuple:", i)
     if i != 0:
        compteur += 1
print("nombres d'element :",compteur)   
liste=list(semaine)   
print(liste)   
print("############ exercice 4 ######" )
etudiant={
    "nom":"ali",
    "age":22,
    "note":15
    }
print("le nom d'etudiant est :",etudiant["nom"])    
etudiant["ville"]="tunis"
print(etudiant)
etudiant["note"]=18
print(etudiant)
etudiant.pop("age")
print(etudiant)
print(etudiant.items())
print("########### exercice 5 ##########")
A={1,2,3,4,5}
B={4,5,6,7}
print("A|B:",A|B)
print("A & B:",A & B)
print("A - B:",A - B)
B.add(33) 
print(B)
print(3 in A)
print("########### exercice 6 ##########")
def addition(a,b):
    return a+b
     
ad1=addition(4,9)
ad2=addition(34,56)
ad3=addition(18,23)
print(ad1,ad2,ad3)
print("########### exercice 7 ##########")

def listnombre(li):
    maximum=li[0]
    summ=0
    for i in  li:
        summ = summ + i
        moyenne= summ / len(li)
        if i > maximum:
            maximum=i 
    return  summ ,moyenne,maximum
l=[3,8,6,12,20]
somme,moyenne,maximum=listnombre(l)
print("somme:",somme)
print("moyenne:",moyenne)
print("plus grande :",maximum)

print("########### exercice 8 ##########")
"""num1=int(input("entrer un nombre :"))
num2=int(input("enter un deuxieme nombre :"))
try:
   d=num1 / num2
   print("resultat:",d)
except:
    print("erreur:division par zero impossible")""" 

print("########### exercice 9 ##########") 
class Voiture:
    def __init__(self,marque,couleur,vitesse):
       self.marque=marque
       self.couleur=couleur
       self.vitesse=vitesse
    def afficher_info(self):
        print(f"le voiture {self.marque} a un couleur {self.couleur} et de vitesse :{self.vitesse}")
    def accelerer(self,augmente):
        self.vitesse += augmente  
        print(f"nouvelle vitesse {self.vitesse} km/h")     
v1=Voiture("kia","noir",120)
v2=Voiture("bmw","gris",150)       
v1.afficher_info()
v1.accelerer(30)
v2.afficher_info()
v2.accelerer(45)
 
print("########### exercice 10 ##########") 
 
class Bibiotheque: 
    def __init__(self):
        self.livres=[]    
    def ajouter(self,titre,auteur):
        livre=Livre(titre,auteur)
        self.livres.append(livre)
        print("livre ajoute")
    def supprimer(self):
        for l in self.livres:
            self.livres.remove(l)
            print("livre supprimer")
    def recherche(self):
         for livre in self.livres:        
             return livre
    def afficher(self):
        for l in self.livres:
            print(livre) 
bib=Bibiotheque() 
try:
    bib.ajouter("Python", "Ahmed") 
    bib.afficher() 
    print(bib.recherche("python"))
    bib.supprimer()
except:
    print("erreur")                 