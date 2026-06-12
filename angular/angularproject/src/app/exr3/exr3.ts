import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-exr3',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './exr3.html',
  styleUrl: './exr3.css',
})
export class Exr3 {
private pro=inject(FormBuilder);
   productForm:FormGroup =this.pro.group({
    name:['',[Validators.required,Validators.minLength(3)]],
    price:['',[Validators.required,Validators.min(0.1)]],
    categorie:['',[Validators.required ] ]
   }) 
   submit(){
     
    if (this.productForm.valid) {
      alert('formulaire enregistrer');
    }
   }
}
