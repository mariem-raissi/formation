import { Component, inject } from '@angular/core';
import { Services } from '../services/services';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [FormsModule,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
 
  private destination=inject(Services)
  voyage:any;
  ngOnInit(){
  this.destination.getvoyage().subscribe((data)=>{
    this.voyage=data;} )
  

  }
}
