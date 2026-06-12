class Etudiant:
    listetudiant=[]
    def __init__ (self,nom,prenom,age,moyenne):
        self.nom = nom
        self.prenom = prenom
        self.age = age
        self.moyenne = moyenne
    def afficher(self):
        print("Nom :", self.nom)
        print("Prénom :", self.prenom)
        print("Âge :", self.age)
        print("Moyenne :", self.moyenne)
        
    def calculer_mention(self):

        if self.moyenne >= 16:
            print( "Très Bien")

        elif self.moyenne >= 14:
           print("Bien")

        elif self.moyenne >= 12:
            print("Assez Bien") 

        else:
            print("Passable")     
    def ajouter(self):
         nom = input("Nom : ")
         prenom = input("Prénom : ")
         age = int(input("Age : "))
         moyenne = float(input("Moyenne : "))
         Etudiant.listetudiant.append(self)
         print("etudiant ajouter")
         
et1=Etudiant( "ali", "benfoulen",  23, 15)
et1.afficher() 

et1.calculer_mention()   
et1.ajouter()                    
          