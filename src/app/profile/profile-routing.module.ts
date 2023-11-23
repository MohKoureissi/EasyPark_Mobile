import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';
import { ProfilComponent } from '../profil/profil.component';
import { ProfilUpdateComponent } from '../profil-update/profil-update.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  {
    path:'', component: ProfilComponent
  },
  {
    path:'', component: ProfilUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
