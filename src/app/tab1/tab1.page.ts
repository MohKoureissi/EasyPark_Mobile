import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AccueilComponent } from '../accueil/accueil.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  // imports: [IonicModule, AccueilComponent]
})
export class Tab1Page implements OnInit{
   slides: any[]= [];

  constructor() {}
  ngOnInit(): void {
    this.slides=[
      {banner:'../../app/assets/hh?png'}
    ]
      
  }

}
