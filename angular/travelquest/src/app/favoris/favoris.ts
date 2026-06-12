import { Component,  EventEmitter,  Input, Output } from '@angular/core';

@Component({
  selector: 'app-favoris',
  imports: [],
  templateUrl: './favoris.html',
  styleUrl: './favoris.css',
})
export class Favoris {
@Input() favori:any[]=[];
@Output() remove=new EventEmitter<any>();

retirer(voyage:any){
  this.remove.emit(voyage);
}
}
