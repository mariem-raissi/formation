import { CanActivateFn,Router } from "@angular/router";
import { inject } from "@angular/core";
export const check:CanActivateFn=()=>{
    const router=inject(Router);
    const login=sessionStorage.getItem('user');
    if (login) return true;
    else {
        router.navigate(['/user']);
        return false;
    }
     
}