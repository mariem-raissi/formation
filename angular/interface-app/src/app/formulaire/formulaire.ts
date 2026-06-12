import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Exercicepipe } from '../exercice.pipe';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-formulaire',
  imports: [FormsModule,Exercicepipe,CommonModule ],
  templateUrl: './formulaire.html',
  styleUrl: './formulaire.css',
})
export class Formulaire {
  private route=inject(ActivatedRoute);
  id=this.route.snapshot.params['id'];
nom:string='';
 

}
