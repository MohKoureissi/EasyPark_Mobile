import { Component,Input, OnInit } from '@angular/core';
import { IonicModule, IonicSlides } from '@ionic/angular';
import { AdminParking } from '../Model/AdminParking';
import { AdminParkingService } from '../admin-parking.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
  //  standalone: true,
  //  imports: [IonicModule, AccueilComponent],
})
export class AccueilComponent  implements OnInit {
  
  displayedColumns: string[] = ['nomParking'];
  admin:AdminParking[]=[];

    //  slides: any[]= [];
 
  constructor(private adminParking: AdminParkingService) { }

  ngOnInit():void{
    this.adminParking.getAllAdminParking().subscribe(admins=>{
      this.admin = admins.filter((admin: any) => admin.acces=== true);
    });
    // this.slides=[
    //   {slider: '../../assets/img/park-removebg-preview.png'},
    //   {slider: '../../assets/img/park-removebg-preview.png'},
    //   {slider: '../../assets/img/park-removebg-preview.png'},
    // ];
   
  }
}

