from datetime import datetime
def ajouter_rendez_vous():
     
    date_str = input("Date du rendez-vous (YYYY-MM-DD) : ") 
    date_rdv = datetime.strptime(date_str, "%Y-%m-%d")

    return  {"date":date_rdv}
def calculs_jours(rdv):
    aujourd_hui = datetime.now()
    difference = rdv["date"] - aujourd_hui

    return difference.days   

def afficher_date_actuelle():
    act = datetime.now()
    print("Date actuelle :", act.strftime("%Y-%m-%d %H:%M:%S"))


afficher_date_actuelle()    
rdv = ajouter_rendez_vous()

jours = calculs_jours(rdv)
 
print("Date :", rdv["date"].strftime("%Y-%m-%d"))
print("Jours restants :", jours)