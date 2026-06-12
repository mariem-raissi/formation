import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Services {
  private http=inject(HttpClient);
   
  private url='http://localhost:3000/voyages';
  getvoyage():Observable<any[]>{
return this.http.get<any[]>(this.url);
  }
  addvoyage(v:any):Observable<any>{
    return this.http.post(this.url,v);
  }  
  update(id:number,v:any):Observable<any>{
return this.http.put(`${this.url}/${id}`,v);
  }
  deletevoyage(id:number):Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`);
  }

}
