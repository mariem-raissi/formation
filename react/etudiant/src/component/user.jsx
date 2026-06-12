class User{
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
    }
    //methode class user
    sayhello(){
        console.log("bonjour"+" "+this.name);
    }
    getinfo(){
        console.log("this user name is"+" "+this.name+" "+"and this age is"+" "+this.age)
    }
}
//objet1
const p1=new User("sara",25,"sara@taher.com");
p1.sayhello();
p1.getinfo();
//objet 2
const p2=new User("takwa",30,"takwa@yahoo.com");
p2.sayhello();
p2.getinfo();