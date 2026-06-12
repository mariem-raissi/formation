import { Component, inject,OnInit  } from '@angular/core';
import { userservice } from '../userservice';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-userlistcomponent',
  imports: [CommonModule],
  templateUrl: './userlistcomponent.html',
  styleUrl: './userlistcomponent.css',
})
export class Userlistcomponent implements OnInit{
private userservis =inject(userservice);
list:any[]=[];
ngOnInit(){
this.userservis.getuser().subscribe((data)=>{
  this.list=data;
console.log(this.list);
})
   
}
 supprimeruser(id:number) {
 this.list = this.list.filter(user => user.id !== id);
  }


 
}