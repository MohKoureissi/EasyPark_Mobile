import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  standalone:true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
 
})


export class SliderComponent  implements OnInit {

  @Input() slides: any[]= [];
  swiperModules = [IonicSlides];
  constructor() { }

  ngOnInit() {}

}
