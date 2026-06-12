import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class repasservice {

  private plans: any[] = [];

  getPlans() {
    return this.plans;
  }

  addPlan(plan: any) {
    const existe = this.plans.find(p => p.jour === plan.jour);

    if (existe) {
      return false; // jour déjà utilisé
    }

    this.plans.push(plan);
    return true;
  }

  isDayTaken(jour: string): boolean {
    return this.plans.some(p => p.jour === jour);
  }
}