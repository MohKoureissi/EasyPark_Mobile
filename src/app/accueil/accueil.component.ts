import { Component,Input, OnInit } from '@angular/core';
import { IonicModule, IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
  //  standalone: true,
  //  imports: [IonicModule, AccueilComponent],
})
export class AccueilComponent  implements OnInit {

     slides: any[]= [];
 
  constructor() { }

  ngOnInit():void{
    this.slides=[
      {slider: '../../assets/img/park-removebg-preview.png'},
      {slider: '../../assets/img/park-removebg-preview.png'},
      {slider: '../../assets/img/park-removebg-preview.png'},
    ];
    }
  }

