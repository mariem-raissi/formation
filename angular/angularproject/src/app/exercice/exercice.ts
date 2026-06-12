 
import { Component, signal,computed } from '@angular/core';
 
@Component({
  selector: 'app-exercice',
  imports: [ ],
  templateUrl: './exercice.html',
  styleUrl: './exercice.css',
})
export class Exercice {
   count=signal(0);
   num=computed(()=>this.count() % 2 === 0)
increment(){
     this.count.update(c=>c+1);
      }
decrement(){
   this.count.update(c=>c-1);
           }
reset(){
this.count.set(0);
}
 

  

    
}
