import { Component,OnInit, inject } from '@angular/core';
import { Services } from '../services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detaills',
  imports: [],
  templateUrl: './detaills.html',
  styleUrl: './detaills.css',
})
export class Detaills implements OnInit {
  private dt=inject(Services);
  
  private route=inject(ActivatedRoute);
detail:any; 
ngOnInit(){
  let id=this.route.snapshot.params['id'];
  this.detail=this.dt.voirdetail(id);
}
}
