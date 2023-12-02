import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoitureService } from '../voiture.service';
import { Voiture } from '../Model/voiture';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.scss'],
})
export class VenteComponent  implements OnInit {
  displayedColumns: string[] = ['marque', 'modele', 'prix', 'photo2'];
  voiture : Voiture[]= []

  constructor(private activatedRoute : ActivatedRoute, private route: Router, private voitureService: VoitureService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((value) => {
      const idAdminParking = value.get("id");
      this.voitureService.listerVoiture(idAdminParking).subscribe((resultat)=>{
       this.voiture= resultat;
      })
    })
  }
 

}
