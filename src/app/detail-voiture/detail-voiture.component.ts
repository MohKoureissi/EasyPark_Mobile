import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoitureService } from '../voiture.service';
import { Voiture } from '../Model/voiture';
import { AdminParking } from '../Model/AdminParking';
import { AdminParkingService } from '../admin-parking.service';

@Component({
  selector: 'app-detail-voiture',
  templateUrl: './detail-voiture.component.html',
  styleUrls: ['./detail-voiture.component.scss'],
})
export class DetailVoitureComponent  implements OnInit {
  displayedColumns: string[] = ['marque', 'modele', 'prix', 'anneeSortie','puissance'];
  voiture: Voiture |any;
  admin: AdminParking | any;
  constructor(private activatedRoute : ActivatedRoute,private adminService: AdminParkingService, private route: Router, private voitureService: VoitureService) {
    this.chargeVoiture();
    this.chargeAdmin();
   }

    ngOnInit() {
      this.voitureService.update$.subscribe(()=>{
        this.chargeVoiture();
        this.chargeAdmin();
      })
     
    }
    chargeVoiture(){
      this.activatedRoute.paramMap.subscribe(params => {
        const idVoiture = params.get('id'); // Convertir l'ID en nombre
        this.voitureService.getVoitureById(idVoiture).subscribe(detailVoiture => this.voiture = detailVoiture);
        // this.loadClasses(id);
      });
    }
    chargeAdmin(){
      this.activatedRoute.paramMap.subscribe(params => {
        const idAdminParking = params.get('id'); // Convertir l'ID en nombre
        this.adminService.getAdminParkingById(idAdminParking).subscribe(admin => this.admin = admin);
        // this.loadClasses(id);
      });
    }
  }
  
  
