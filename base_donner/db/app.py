from flask import flask
import mysql.connector
app=Flask(__name__)
c=mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="dbecole"
)
cu =c.cursor()


if __name__=="main":
    app.run(debug=True)