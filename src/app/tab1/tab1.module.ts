import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { AccueilComponent } from '../accueil/accueil.component';
import { VenteComponent } from '../vente/vente.component';
import { DetailVoitureComponent } from '../detail-voiture/detail-voiture.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
  ],
  declarations: [Tab1Page, AccueilComponent,VenteComponent, DetailVoitureComponent ]
  
})
export class Tab1PageModule {}
