import mysql.connector
c=mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database= "testdb"

)
cursor=c.cursor()
cursor.execute("create table etudiant(id integer,nom varchar(100),age integer)")
c.commit()

c.close()