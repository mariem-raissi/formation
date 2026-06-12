class Employe {
    constructor(nom,salaire_base){
        this.nom=nom;
        this.salaire_base=salaire_base;
    }
    afficher_salaire(){
        console.log("this person name is "+" "+this.nom +" "+"this slaire_base is"+" "+this.salaire_base);
    }
}
const emp=new Employe("amira",500)
emp.afficher_salaire();

class Manager extends Employe{
    constructor(nom,salaire_base,prime){
        super(nom,salaire_base);
        this.prime=prime;
    }
    
}
const mang=new Manager("layla",600,100);
mang.afficher_salaire();

class Developpeur extends Employe{
    constructor(nom,salaire_base,langage){
        super(nom,salaire_base);
        this.langage=langage;
    }
    coder(){
        console.log("this langage is"+" "+this.langage);
    }
}
const dev=new Developpeur("marwa",400,"javascript");
dev.coder();