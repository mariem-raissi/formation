import { Component , inject,OnInit  } from '@angular/core';
 import { ActivatedRoute } from '@angular/router';
import { destination } from '../services/destination';
import { RouterLink } from '@angular/router';
 import { Favoris } from '../favoris/favoris';
@Component({
  selector: 'app-cartevoyage',
  imports: [RouterLink,Favoris],
  templateUrl: './cartevoyage.html',
  styleUrl: './cartevoyage.css',
})
export class Cartevoyage  implements OnInit {
  
 private carte=inject(destination );
 private route=inject(ActivatedRoute);
 cart:any;
 favorise:any[]=[];
 ngOnInit(){
  let id=this.route.snapshot.params['id'];
  this.cart=this.carte.voirdetail(id);
 }
 favoris(voyage: any) {
  const index = this.favorise.indexOf(voyage);

  if (index === -1) {
    this.favorise.push(voyage);
  } else {
    this.favorise.splice(index, 1);
  }
}
 
}
