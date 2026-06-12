import re 
email=input("entrer your mail: ")
m=r"(\w+)@(\w+).(\w+)"
result=re.search(m,email)
print(result.group())
numero = "22123456"

pattern = r"^[24579][0-9]{7}$"

if re.match(pattern, numero):
    numero = "+216 " + numero
    print(numero)
else:
    print("Numéro invalide")  
password=input("entrer le mot de passe: ")
p=r"\w{6}"
pswd=re.search(p,password)
if pswd:
    print("Mot de passe valide")
else:
    print("Mot de passe invalide") 