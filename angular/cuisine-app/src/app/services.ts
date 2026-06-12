import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Services {
     recettes=signal<any[]>([
    {
      id:1,
      titre:"pizza",
      ingredients:"Farine,tomates,fromage",
      image:"assets/pizza.jpg"
    }, 
    {
      id:2,
      titre:"cabbage",
      ingredients:"carottes,pommes de terre,oignons,poulet",
      image:"assets/Cabbage.jpg"
    }, 
    {
      id:3,
      titre:"chiken-bake",
      ingredients:"poulet,pommes de terre,oignons,ail",
      image:"assets/Chicken-bake.jpg"
    }, 
    {
      id:4,
      titre:"Antipasta-salmon",
      ingredients:"Saumon,pain,fromage",
      image:"assets/antipasta-salmon.jpg"
    }, 
    {
      id:5,
      titre:"Salade-chevre-chaud",
      ingredients:"fromage de chevre,pain ,salade verte,tomates,concombre,noix,lardons",
      image:"assets/salade-chevre-chaud.jpg"
    }, 
    {
      id:6,
      titre:"Apple-custard-rose",
      ingredients:"pommes,pate feuilletée,creme (custard)",
      image:"assets/Apple-custard-rose.JPG"
    },
    {
      id:7,
      titre:"Oven-Baked-Pork",
      ingredients:"Porc(cotes,filet ou épaule),assaisonnement,huile d'olive,legumes",
      image:"assets/Oven-Baked-Pork-Chops.jpg"
    },
    {
      id:8,
      titre:"Oven-Roasted-Sweet-Potato",
      ingredients:"patates douces,huile d'olive,epices,herbes,option sucre sale",
      image:"assets/Oven-roasted-sweet-potato-and-courgette.jpg"
    },
    {
      id:9,
      titre:"Spaghetti-Carbonara",
      ingredients:"Spaghetti,Oeufs,fromage rapé,Guanciale ,option(selon le gout)",
      image:"assets/spaghetti-carbonara.jpg"
    },
    
   ])
    
   voirdetail(id:number){
    return this.recettes().find(r=>r.id==id);
   }
  
}
