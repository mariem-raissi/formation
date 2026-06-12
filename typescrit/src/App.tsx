 
import './App.css'

function App() {
  let name:string|number="ali";
  /* let a;
  a=5;   // work but not recommended
  a="test";*/
  name=60;
  const test:boolean=true;
  let city="tunis"; //type string automatique 
  /*city=3; //error because city is type string */
  /*var data:any;
  data=3;
  console.log(data);
  data="test";        //not recommende type any because it can be any type and it can cause problems in the future
  console.log(data); 
  data=true;
  console.log(data); 
  */
  function sum(a:number,b:number):void{
    console.log(a+b);
  }
  function sum2(a:number,b:number):number{
   return 5;
  }
  let x=sum2(1,2)+1;
  console.log(x);
 /* console.log(sum2(1));*/
function formula(a:number,b?:number):number{
  if(b){
    return a+b;
  }else{
    return a;
  }
}
console.log(formula(5));
console.log(formula(5,10));
function geta(name:string,age?:number):void{
  console.log(name,age);
}
geta("ali");
geta("mohamed amine ,",20);
let school:string[]=["table","chair","computer"];
console.log(school);
let datastudiant:string[]|number[]=["ali","mohamed","sami"];
console.log(datastudiant);
//tuple
let dataformation:[string,number,boolean,string,number]=["typescrt",30,true,"TUNIS",40];
console.log(dataformation);
let username:Array<string>=["ali","mohamed","sami"];
console.log(username);
let nb:Array<number|string>=["1","3",3,"four","five"];
console.log(nb);
/*let score:Array<number,string>=[1,2,"3","2"];
console.log(score);*/ //error because the array contain number and string but we declare
/*let user:[number,string]=["takwa",30]; //error because the tuple contain number and string*/
let user:[string,number]=["takwa",30];
console.log(user);
  return (
    <>
     <h1>
      {name}
     </h1>
         {/* <p> {a}</p>*/}
     <p>
      {city}
     </p>
    </>
  )
}

export default App
