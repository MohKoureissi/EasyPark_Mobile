import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptionPageRoutingModule } from './inscription-routing.module';

import { InscriptionPage } from './inscription.page';
import { InscriptioncComponent } from '../inscriptionc/inscriptionc.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscriptionPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [InscriptionPage, InscriptioncComponent]
})
export class InscriptionPageModule {}
