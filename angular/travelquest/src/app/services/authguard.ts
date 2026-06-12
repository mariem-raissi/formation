 import { inject } from "@angular/core";
import { Router } from "@angular/router"; 
import { AuthService } from "./authservice";
 export const authguard=()=>{
    const auth=inject(AuthService);
    const router=inject(Router);
    if(auth.isOnline()){
        return true;
    }
    else{
        router.navigate(['/login']);
        return false;
    }
 }