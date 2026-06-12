import { Component,inject } from '@angular/core';
import { FormGroup,ReactiveFormsModule,FormControl } from '@angular/forms';
import { Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive.html',
  styleUrl: './reactive.css',
})
export class Reactive {
  private fb=inject(FormBuilder);
forms=this.fb.group({
  name:['',Validators.required],
  name2:['',[Validators.required,Validators.minLength(4)]],
  adress:this.fb.group({
    city:[''],
    postal_code:['']
  })
});
envoyer(){
  alert ("envoyer"+" "+ this.forms.value.name+" "+ this.forms.value.name2);
}
patch(){
  this.forms.patchValue({
    name:"marwa",
    name2:"fourati"
  })
}
reset(){
  this.forms.reset();
}
}
