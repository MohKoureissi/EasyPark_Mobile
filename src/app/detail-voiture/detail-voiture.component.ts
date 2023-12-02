import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoitureService } from '../voiture.service';
import { Voiture } from '../Model/voiture';

@Component({
  selector: 'app-detail-voiture',
  templateUrl: './detail-voiture.component.html',
  styleUrls: ['./detail-voiture.component.scss'],
})
export class DetailVoitureComponent  implements OnInit {
  displayedColumns: string[] = ['marque', 'modele', 'prix', 'anneeSortie','puissance'];
  voiture: Voiture |any;
  constructor(private activatedRoute : ActivatedRoute, private route: Router, private voitureService: VoitureService) {
    this.chargeVoiture();
   }

    ngOnInit() {
      this.voitureService.update$.subscribe(()=>{
        this.chargeVoiture();
      })
     
    }
    chargeVoiture(){
      this.activatedRoute.paramMap.subscribe(params => {
        const idVoiture = params.get('id'); // Convertir l'ID en nombre
        this.voitureService.getVoitureById(idVoiture).subscribe(detailVoiture => this.voiture = detailVoiture);
        // this.loadClasses(id);
      });
    }
  }
  
  
