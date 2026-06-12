//class parent
class Person{
    constructor(name,aga,email,gender,role){
        this.name=name;
        this.aga=aga;
        this.email=email;
        this.gender=gender;
        this.role=role;
    }
    getinfo(){
        console.log("this person name is "+" "+this.name)
    }
}

//child class
class Student extends Person{
    constructor(name,aga,email,gender,role,id){
        super(name,aga,email,gender,role);
        this.id=id;
    }
}
const s1=new Student("sara",25,"sara@taher.com","female","student",1);
s1.getinfo();
s1.getclass();
class teacher extends Person{
    constructor(name,aga,email,gender,role,subject){
        super(name,aga,email,gender,role);
        this.subject=subject;
    }
    getsubject(){
        console.log("this teacher subject is "+" "+this.subject);
    }
}
const t1=new teacher("takwa ",30,"takwa@gtafg.com","female","teacher","js");
t1.getinfo();
t1.getsubject();