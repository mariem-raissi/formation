import { Component, inject } from '@angular/core';
import { AuthService } from '../services/authservice';
import { Router } from '@angular/router';
import { FormsModule ,NgForm} from '@angular/forms';
 @Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
 private loginn = inject(AuthService);
  private router = inject(Router); 
credentials = { email:'', password:''};

onlogin(){
  this.loginn.login(this.credentials).subscribe({
    next:(val)=>{
    
    if(val){
      alert('Login successful!');
      this.router.navigate(['/reserve']);
       }
  else{
    alert('Invalid credentials, please try again.');
  }
},
error:(err)=>{
  alert('error');
  this.router.navigate(['/sign'] )
}
 
});

}}
