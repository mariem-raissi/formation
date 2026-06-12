import mysql.connector
c=mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="gestionstock"
    )
cursor=c.cursor()
cursor.execute("""
CREATE TABLE IF NOT EXISTS produits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    price FLOAT,
    quantity INT,
    category VARCHAR(100)
)
""")
def ajouter():
    nom = input("Nom du produit : ")
    prix = float(input("Prix : "))
    quantite = int(input("Quantité : "))
    categorie = input("Catégorie : ")
    cursor.execute(
        "INSERT INTO produits (name, price, quantity, category) VALUES (%s, %s, %s, %s)",
        (nom, prix, quantite, categorie)
    )

    c.commit()

    print("Produit ajouté avec succès.\n")
ajouter()    
def afficher():
    cursor.execute("select * from produits")
    for r in cursor:
        print(r)
def afficher_stock():
    cursor.execute("SELECT * FROM products")
    produits = cursor.fetchall()
    for p in produits:
        print(p) 
afficher_stock()               
def rechercher():
    nom = input("Nom du produit à rechercher : ")

    l = "SELECT * FROM products WHERE name LIKE %s"
    cursor.execute(l, (f"%{nom}%",))

    produits = cursor.fetchall()

    if produits:
        for p in produits:
            print(p)
    else:
        print("Produit non trouvé.")    
rechercher()         
c.close()    