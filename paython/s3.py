etudiant={
    "nom":"ahmed",
    "age":12,
    "filiere":"info"
} 
print(etudiant)
print(etudiant.get("age") )
etudiant["ville"]="tunis"
print("################### ")
a={1,2,8,67,90}  
b={4,"az",6,"er",8,"pm"}
print("a|b:",a|b)
print(b|a) 
def saluer():
 print("Bonjour !")
saluer()
def f1():
    print("bonjour")
    a=1
    b=5
    v=a+b
    print(v)
f1()
def f2(x,y):
    c=x+y
    print(c)
f2(2,9)   
print("hhhhhhhhhhhh")
try:
 x = int("abc") #ValueError
except:
 print("⚠️ Erreur !") 
try:
    print("hello world")
    x=int("abc")
except ValueError:
    print("erreur")
print(2+7)
     
     
