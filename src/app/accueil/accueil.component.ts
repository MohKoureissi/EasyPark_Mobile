import { Component,Input, OnInit } from '@angular/core';
import { AdminParking } from '../Model/AdminParking';
import { AdminParkingService } from '../admin-parking.service';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
  //  standalone: true,
    // imports: [IonSlidesModule],
    
})
export class AccueilComponent  implements OnInit {
  
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    loop: true,
    autoplay: {
          delay: 4000
    }
  };
  displayedColumns: string[] = ['nomParking'];
  admin:AdminParking[]=[];

    //  slides: any[]= [];
 
  constructor(private adminParking: AdminParkingService) { }

  ngOnInit():void{
    this.adminParking.getAllAdminParking().subscribe(admins=>{
      this.admin = admins.filter((admin: any) => admin.acces=== true);
    });
    // swiperModules = [IonicSlides];
     
   
  }
}

