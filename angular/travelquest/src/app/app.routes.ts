import { Routes } from '@angular/router';
import { Listvoyage } from './listvoyage/listvoyage';
import { Cartevoyage } from './cartevoyage/cartevoyage';
import { Admin } from './admin/admin';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Home } from './home/home';
import { Reservation } from './reservation/reservation';
import { authguard } from './services/authguard';

export const routes: Routes = [
    {path:'home',component:Home},
     {path:'login',component:Login},
    {path:'list',component:Listvoyage},
    {path:'carte/:id',component:Cartevoyage},
    {path:'admin',component:Admin},
    {path:'sign',component:Signup},
    {path:'reserve',component:Reservation,canActivate:[authguard]}

];
