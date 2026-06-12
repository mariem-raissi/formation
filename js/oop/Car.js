class Car{
    constructor(make,model,year){
        this.make=make;
        this.model=model;
        this.year=year;
    }
    //without abstraction
    startCar(){
        console.log("check engine");
        console.log("inject fuel");
        console.log ("start engine");
        console.log("car is running");
    }
   // with abstraction
   start(){
    this.checkEngine();
    this.injectFuel();
    this.startEngine();
    console.log("car is running");
   }
   checkEngine(){
    console.log("check engine with abstraction");
   }
   injectFuel(){
 console.log("inject fuel with abstraction");
   }
   startCar(){
 console.log("start engine with abstraction");
   }
}
const mycar=new Car("toyota","corolla",2020);
mycar.start();
/////////////////////////////////
class Shape{
    draw(){
        console.log("drawing a shape");
    }
}
class circle extends Shape{
    draw(){
        console.log("drawing a circle");
    }
    test(){
        this.draw();
        super.draw();
        console.log("test");

    }
}
const circle=new circle();
//circle.draw();
circle.test();