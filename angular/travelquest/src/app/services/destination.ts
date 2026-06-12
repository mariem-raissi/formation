import { Injectable } from "@angular/core"
@Injectable({
  providedIn: 'root',
})
export class destination {
    voyages:any[]=[{
      id:1,
      destination:"paris",
      pays: "france",
      priX:1200,
      image:"assets/paris.jpg"
    },
    {
      id:2,
      destination:"istanbul",
      pays: "turky",
      priX:1000,
      image:"assets/paris.jpg"
    },
    {
      id:3,
      destination:"berlin",
      pays: "allemagne",
      priX:1500,
      image:"assets/berlin.jpg"
    },
    {
      id:4,
      destination:"tokyo",
      pays: "japon",
      priX:2000,
      image:"assets/tokyo.jpg"
    },
    {
      id:5,
      destination:"New York",
      pays: "america",
      priX:2000,
      image:" assets/new york.jpg"
    },
    {
      id:4,
      destination:"Roma",
      pays: "Italia",
      priX:2000,
      image:" assets/roma.jpg"
    },
    {
      id:4,
      destination:"seol",
      pays: "korea",
      priX:2000,
      image:" assets/seol.jpg"
    }
     
]   ;
  voirdetail(id:number){
    return this.voyages.find(r=>r.id==id);
  }       
     
}  