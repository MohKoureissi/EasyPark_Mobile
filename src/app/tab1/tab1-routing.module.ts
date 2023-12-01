import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { AccueilComponent } from '../accueil/accueil.component';
import { VenteComponent } from '../vente/vente.component';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {path: '', component: AccueilComponent},

  {path: 'vente/:id', component: VenteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
