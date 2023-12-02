import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { AccueilComponent } from '../accueil/accueil.component';
import { VenteComponent } from '../vente/vente.component';
import { DetailVoitureComponent } from '../detail-voiture/detail-voiture.component';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {path: '', component: AccueilComponent},

  {path: 'vente/:id', component: VenteComponent},
  {path: 'detail-voiture/:id', component: DetailVoitureComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
