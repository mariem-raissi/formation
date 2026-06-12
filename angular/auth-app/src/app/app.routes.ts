import { Routes } from '@angular/router';
import { About } from './about/about';
import { Notfound } from './notfound/notfound';
import { Product } from './product/product';
import { Header } from './header/header';
import { check } from './header/check';
import { User } from './user/user';
import { Srviceresolve } from './srviceresolve/srviceresolve';
import { resolvepost } from './srviceresolve/resolvepost';
import { Pagelogin } from './pagelogin/pagelogin';
import { Reactive } from './reactive/reactive';

export const routes: Routes = [
    {
        path:"header",
        component:Header,
        canActivate:[check],
        children:[
     {
        path:"about",
        component:About
    },
    
    {
        path:"produit",
        component:Product
    } ] },
    {
        path:"user",
        component:User
    },
    {
        path:"login",
        component:Pagelogin
    },
    {
        path:"reactive",
        component:Reactive
    },
    {
        path:"admin",
        loadComponent:()=>
            import('./admin/admin').then(m=> m.Admin)
    },
    { 
        path:"service",
        component:Srviceresolve,
        resolve:{
            posts:resolvepost
        }
    },

    {
        path:"**",
        component:Notfound
    }
];
