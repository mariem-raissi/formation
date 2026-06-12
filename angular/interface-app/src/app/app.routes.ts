import { Component } from '@angular/core';
import { Routes } from '@angular/router';
 import { Formulaire } from './formulaire/formulaire';
import { Listproduit } from './listproduit/listproduit';
import { Carte } from './carte/carte';
import { Detailproduit } from './detailproduit/detailproduit';

export const routes: Routes = [
   {path:'detail', component:Detailproduit},  
   {path:'form/:id', component:Formulaire},  
   {path:'prod', component:Listproduit},
   {path:'car', component:Carte}
];
