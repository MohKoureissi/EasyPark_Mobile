import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { VenteComponent } from '../vente/vente.component';
import { DetailVoitureComponent } from '../detail-voiture/detail-voiture.component';
import { ModePaiementComponent } from '../mode-paiement/mode-paiement.component';
import { DetailsLocationComponent } from '../details-location/details-location.component';
import { ModePaiementLocationComponent } from '../mode-paiement-location/mode-paiement-location.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page, VenteComponent,
     DetailVoitureComponent, ModePaiementComponent,
      DetailsLocationComponent,ModePaiementLocationComponent]
})
export class Tab2PageModule {}
