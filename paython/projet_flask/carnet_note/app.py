import mysql.connector
c=mysql.connector.connect(
    host="localhost"
    user="root"
    password=""
    database= "testdb"

)
cursor=c.cursor()
#show database
cursor.execute("show database")
for db in cursor:
    print(db)
#create table    
cursor.execute("create table etudiant(id integer,nom varchar(100),age integer)")
c.commit

#create table
cursor.execute("create table enseignant(id integer auto_increment primary key,nom varchar(100),age integer)")
c.commit()    
c.close()    