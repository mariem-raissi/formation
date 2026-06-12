import { Component } from '@angular/core';
import { FormsModule ,NgForm} from '@angular/forms';

@Component({
  selector: 'app-pagelogin',
  imports: [FormsModule],
  templateUrl: './pagelogin.html',
  styleUrl: './pagelogin.css',
})
export class Pagelogin {
  forms={
    name:'',
    email:'',
    password:''
  }

  onsubmit(form:NgForm){
    alert("login envoyer"+" "+ form.value.name);
  }
}
