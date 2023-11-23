import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { ProfilComponent } from '../profil/profil.component';
import { ProfilUpdateComponent } from '../profil-update/profil-update.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule
  ],
  declarations: [ProfilePage, ProfilComponent, ProfilUpdateComponent]
})
export class ProfilePageModule {}
