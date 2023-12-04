import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
import { NavigationEnd, Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  closed$ = new Subject<any>();
  showTabs = true; // <-- show tabs by default
  num!:number;
  constructor(private _router: Router) {}


  ngOnInit() {
    if(localStorage.getItem("idClient")){
      this.num=parseInt(localStorage.getItem("idClient")!);
   
    }else{
      this.num=0;
    }

    console.log("Client====", this.num);
    this._router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      takeUntil(this.closed$)
    ).subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('Current URL:', event.url);
        if (event.url === '/tabs/connexion') {
          this.showTabs = false;
        } else {
          this.showTabs = true;
        }
      
      }
    });
  }
  // ngOnDestroy() {
  //   this.closed$.next(); // <-- close subscription when component is destroyed
  // }
}
