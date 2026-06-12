import mysql.connector
c=mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database= "testdb"

)
cursor=c.cursor()
#show database
cursor.execute("show database")
for db in cursor:
    print(db)
#create table    
cursor.execute("create table etudiant(id integer,nom varchar(100),age integer)")
c.commit()

#create table
cursor.execute("create table enseignant(id integer auto_increment primary key,nom varchar(100),age integer)")
c.commit() 
#insert donner
cursor.execute("insert enseignant(nom,age)values ('mariem',23)")
cursor.execute("insert enseignant (nom,age)values('haffiza',20)") 
name=input("entrer name")
age=int(input("entrer age"))
cursor.execute('insert into enseignant(nom,age)values(%s,%s)',(name,age))
c.commit()

cursor.execute("select * from enseignant ")
for row in cursor:
    print(row)
cursor.execute("select nom from enseignant")
for rox in cursor:
    print(rox)
cursor.execute("select * from enseignant where age>18") 
for row in cursor:
    print(row)  
#update date
cursor.execute("update enseignant set nom='ali'where id=4")
c.commit()  
#delete data
cursor.execute("delete from enseignant where id=4")
c.commit()  
cursor.execute("select * from enseignant ")
r=cursor.fetchall()
print(r[0])
for row in r:
    print(row[1])
#suuprimer table    
"""cursor.execute("drop table etudiant")
c.commit()"""
#alter table change name
"""cursor.execute("alter table etudiant1 add column email varchar(100) ")"""
"""cursor.execute("alter table etudiant1 rename to etudiant")"""
"""cursor.execute("alter table etudiant change column email classe varchar(100)")
cursor.execute("alter table etudiant drop column classe")"""
#creation bd
cursor.execute("create database if not exists db1")
 

c.close()     