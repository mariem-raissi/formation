import { Component, inject } from '@angular/core';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
 constructor(private router:Router){}
enregistrer(){
   
  sessionStorage.setItem('user','mariem');
  
  this.router.navigate(['/header']);
}
}
