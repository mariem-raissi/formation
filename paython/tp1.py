print("exercice 1:")
chaine="hello world"
m=12
c=2.5
d="chiane"
f= True
print(chaine)
print(type(m))
print(type(c))
print(type(d))
print(type(f))
 
print("######### exercice2: #########")
a=15
b=20
print(a+b)
print(a!=b)
print(a * b)
print(a / b)
print("######### exercice 3: ########")
age=15
if(age < 18):
    print("mineur")
elif(18 < age < 60):
  print("majeur")
else:
    print("senior")
print("############  exercice 4  #######")    
for i in range(1,10):
     
    if(i % 2 == 0):
     print(i)
print("#########  exercice 5  ##########")
mdp = ""

while mdp != "1234":
    mdp = "1234"

print("Correct") 
print("########## exercice 6 ########")
nbr=[1,2,7,9,10]
print(nbr[0],nbr[-1])
nbr.append(12)
print(nbr)
nbr.remove(7)
print(nbr)
tup=(1,2,4)
print("########## exercice 7 ###########")
note1=15
note2=12
note3=17 
moyenne=(note1 + note2 + note3) /3
if  moyenne >= 10 :
    print("admis")
else:
    print("refuse")    

print("######## exercice 8 #########")    
i=5
for n in range(1,11):
    print(i, "x", n, "=",  i * n)

print("#########  exercice 9  ###########")    
cr="programation"
compteur=0
for i in cr:
    if i in "aeiuo":
        compteur +=1

print("nombre de voyelle:",compteur)   

print("############# exercice 10 ######")
somme=0
for i in range(1,101):
    if i % 2 == 0:
        somme += i
print(somme)
print("########## exercice 11 #########")
nombres=[12,7,9,34,123,4,36]
b=nombres[0]
for n in nombres:
    if n > b :
       b=n
print(b)   
print("########### exercice 12 ########")
s=12
h= 0
while h != s:
    h=int(input("entrer le nombre:"))
    if s > h:
        print("trop petit")   
    elif s < h:
        print("trop grand") 
        
    else:
        print("bravo")   
          