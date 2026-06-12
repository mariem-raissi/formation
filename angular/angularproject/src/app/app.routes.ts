import { Routes } from '@angular/router';
import { Login } from './login/login';
import { MonComposant } from './mon-composant/mon-composant';
import { UserCard } from './user-card/user-card';
import { Exercice } from './exercice/exercice';
import { Signal } from './signal/signal';
import { Exr3 } from './exr3/exr3';
import { Userlistcomponent } from './userlistcomponent/userlistcomponent';
export const routes: Routes = [
    
    {path:'ex',component:Exercice},
    {path:'form',component:Exr3 },
    {path:'user',component:Userlistcomponent}
];
