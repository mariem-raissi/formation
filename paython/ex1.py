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