import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { AccueilComponent } from '../accueil/accueil.component';
import { VenteComponent } from '../vente/vente.component';
import { DetailVoitureComponent } from '../detail-voiture/detail-voiture.component';
import { DetailParkingComponent } from '../detail-parking/detail-parking.component';
import { ModePaiementLocationComponent } from '../mode-paiement-location/mode-paiement-location.component';
import { ModePaiementComponent } from '../mode-paiement/mode-paiement.component';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {path: '', component: AccueilComponent},

  {path: 'vente/:id', component: VenteComponent},
  {path: 'detail-voiture/:id', component: DetailVoitureComponent},
  {
    path:'mode-paiement',
    component:ModePaiementComponent
  },
  {
    path:'mode-paiement-location',
    component:ModePaiementLocationComponent
  },
  {
    path: 'detail-parking',
    component: DetailParkingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
