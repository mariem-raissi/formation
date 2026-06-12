import { List } from "./list";
 
const infoEtudiant={
    name:"ahmed",
    age:14 ,
    moyenne:16  

}
const matiere=["arabe","francais","anglais"];
export const Etudiant=()=>{
     
    return(
        <>
        <div>
             
        <List name={infoEtudiant.name} matiere ={matiere}
         age={infoEtudiant.age} moyenne={infoEtudiant.moyenne}></List>
        </div>
        </>
    );
}