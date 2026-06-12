from flask import Flask, render_template, request, redirect
import json
import os

app = Flask(__name__)

 
def load_tasks():
    if os.path.exists("taches.json"):
        with open("taches.json", "r", encoding="utf-8") as f:
            return json.load(f)
    return []

 
def save_tasks(tasks):        
    with open("taches.json", "w", encoding="utf-8") as f:
        json.dump(tasks, f,  indent=4)

@app.route("/")
def index():
    tasks = load_tasks()
    return render_template("index.html", tasks=tasks)

@app.route("/ajouter", methods=["POST"])
def ajouter():
    tasks = load_tasks()

    tache = request.form["tache"]

    tasks.append({
        "titre": tache
    })

    save_tasks(tasks)

    return redirect("/")
@app.route("/supprimer/<int:index>")
def supprimer(index):
    tasks = load_tasks()

    if 0 <= index < len(tasks):
        tasks.pop(index)
        save_tasks(tasks)

    return redirect("/")    
@app.route("/modifier/<int:index>", methods=["GET", "POST"])
def modifier(index):
    tasks = load_tasks()

    if request.method == "POST":
        nouveau_titre = request.form["tache"]

        tasks[index]["titre"] = nouveau_titre

        save_tasks(tasks)

        return redirect("/")

    return render_template(
        "modifier.html",
        task=tasks[index],
        index=indexco
    )

if __name__ == "__main__":
    app.run(debug=True)