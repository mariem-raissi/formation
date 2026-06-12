import { Routes } from '@angular/router';
import { Recette } from './recette/recette';
import { Detaills } from './detaills/detaills';
import { Repas } from './repas/repas';
import { Accueil } from './accueil/accueil';
 

export const routes: Routes = [
    {path:'',component: Accueil} ,
    { path :'recet',component:Recette} ,
    {path:'detail/:id',component:Detaills},
    {path:'repas',component:Repas}
    
     
];
