import { Component,inject, OnInit } from '@angular/core';
import { Services } from '../services/services';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/authservice';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reservation',
  imports: [FormsModule],
  templateUrl: './reservation.html',
  styleUrl: './reservation.css',
})
export class Reservation implements OnInit {

  private service = inject(Services);
  private authservice=inject(AuthService);
  private router=inject(Router)

  voyages: any[] = [];
  reservation = {
    nom: '',
    prenom: '',
    voyageId: '',
    date: '',
    nbPlaces: 1
  };

  ngOnInit() {
  
    this.service.getvoyage().subscribe(data => {
      console.log(data);
      this.voyages=data;
    });
   }

  reserver() {
    console.log(this.reservation);

    // ⚠️ à adapter selon ton backend
    this.service.addvoyage(this.reservation).subscribe({
      next: () => {
        alert('Réservation réussie');
        this.resetForm();
      },
      error: () => alert('Erreur lors de la réservation')
    });
  }

  resetForm() {
    this.reservation = {
      nom: '',
      prenom: '',
      voyageId: '',
      date: '',
      nbPlaces: 1
    };
  }
  logout(){
    this.authservice.logout();
this.router.navigate(['/list'])
  }

}
