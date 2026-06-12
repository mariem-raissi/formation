import { Component ,inject} from '@angular/core';
import { repasservice } from '../repasservice';

@Component({
  selector: 'app-repas',
  imports: [],
  templateUrl: './repas.html',
  styleUrl: './repas.css',
})
export class Repas {

 

  private service = inject( repasservice);

  plans = this.service.getPlans();

  jours = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];

  message = '';

  ajouter(jour: string, recette: string) {
    const ok = this.service.addPlan({ id: Date.now(), jour, recette });

    if (!ok) {
      this.message = `  Le jour ${jour} est déjà planifié`;
    } else {
      this.message = `  Repas ajouté pour ${jour}`;
    }

    this.plans = this.service.getPlans();
  }
}