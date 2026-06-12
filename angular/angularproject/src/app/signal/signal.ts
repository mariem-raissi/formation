import { Component,inject } from '@angular/core';
import { ReactiveFormsModule,FormBuilder,FormGroup,Validators } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-signal',
  imports: [ ReactiveFormsModule,CommonModule],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  private fb=inject(FormBuilder);
   produit:FormGroup=this.fb.group({
    nom:['',Validators.required],
    email:['',Validators.required]
   }) 
  submit(){
     
      const data=this.produit.value;
      console.log(data);
     
  }
  }


