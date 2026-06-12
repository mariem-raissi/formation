import { Component, inject } from '@angular/core';
import { AuthService } from '../services/authservice';
import { NgForm,FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  imports: [FormsModule,CommonModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
private  auth=inject(AuthService) ;
private router=inject(Router)
  
  usersList: any[] = [];

  cree(form: NgForm) {
    if (form.invalid) return;

    this.auth.signup(form.value).subscribe({
      next: (res) => {
         
        this.usersList.push(res);
        alert('enregistrer'); 
        form.reset();
        this.router.navigate(['/home']) 
      },
      error: (err) => {
        console.error("Signup failed:", err);
      }
    });
  }
}

