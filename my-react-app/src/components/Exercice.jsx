import { sum,multiple,divide } from "./math";
export const Exercice =()=> {
   
    const a=10;
   const b=5;
   const somme=sum(a,b);
   const multiply=multiple(a,b);
   const divise=divide(a,b);
return (

<div>
    <p>la somme de {a} et {b} est: {somme} </p>
    <p>la multiplication de {a} et  {b} est:  {multiply} </p>
    <p>la division de {a} et  {b} est: {divise} </p>
</div>
);
};