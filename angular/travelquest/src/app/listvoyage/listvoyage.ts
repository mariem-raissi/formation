import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Services } from '../services/services';
@Component({
  selector: 'app-listvoyage',
  imports: [CommonModule, RouterLink],
  templateUrl: './listvoyage.html',
  styleUrl: './listvoyage.css',
})
export class Listvoyage {
  
  private destination=inject(Services);
    voyage:any;
  ngOnInit(){
  this.destination.getvoyage().subscribe((data)=>{
    this.voyage=data;} )

  }
  
}
