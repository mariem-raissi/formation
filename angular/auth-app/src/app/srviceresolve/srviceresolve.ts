import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-srviceresolve',
  imports: [],
  templateUrl: './srviceresolve.html',
  styleUrl: './srviceresolve.css',
})
export class Srviceresolve {
  post:any;
  constructor(private route:ActivatedRoute){
    this.route.data.subscribe((data)=>{
      this.post=data['posts'];
    })
  }

}
