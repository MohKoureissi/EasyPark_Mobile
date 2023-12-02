import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import { DetailVoitureComponent } from '../detail-voiture/detail-voiture.component';
import { VenteComponent } from '../vente/vente.component';
import { ModePaiementComponent } from '../mode-paiement/mode-paiement.component';
import { DetailsLocationComponent } from '../details-location/details-location.component';
import { ModePaiementLocationComponent } from '../mode-paiement-location/mode-paiement-location.component';
import { DetailParkingComponent } from '../detail-parking/detail-parking.component';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path:'vente',
    component: VenteComponent
  },
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
export class Tab2PageRoutingModule {}
