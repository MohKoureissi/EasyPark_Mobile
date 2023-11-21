import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptionPage } from './inscription.page';
import { InscriptioncComponent } from '../inscriptionc/inscriptionc.component';

const routes: Routes = [
  {
    path: '',
    component: InscriptionPage
  },
  {
    path:'', component: InscriptioncComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptionPageRoutingModule {}
