import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import { DetailVoitureComponent } from '../detail-voiture/detail-voiture.component';
import { VenteComponent } from '../vente/vente.component';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'detail-voiture',
    component: DetailVoitureComponent
  },
  {
    path:'vente',
    component: VenteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
