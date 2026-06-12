import { Component,inject,signal } from '@angular/core';
import { RouterLink } from '@angular/router'; 
import { Services } from '../services';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-recette',
  standalone:true,
  imports: [ CommonModule ,RouterLink],
  templateUrl: './recette.html',
  styleUrl: './recette.css',
})
export class Recette {
private service=inject(Services);
recettee=this.service.recettes() ;

}
