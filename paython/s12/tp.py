from flask import Flask,render_template, request
app= Flask(__name__)
@app.route("/affiche")
def affiche():
    return "Ma To-Do List"

@app.route("/liste")
def liste():
    liste =["my first tache","mysecond tache","last tache" ]
    return render_template ("index.html", liste=liste ) 
@app.route("/form",methods=["POST","GET"])
def form():
    if request.method == "POST":
        name = request.form["tache"]
        print(name)
        return   name 
    return render_template("index.html")
if __name__=='__main__':
    app.run(debug=True)   
