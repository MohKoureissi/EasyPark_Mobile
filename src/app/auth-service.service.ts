import { Injectable } from '@angular/core';
import { Client } from './Model/Client';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private client1: Client | undefined;

  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();

  public isAuth: boolean = false;

  triggerUpdate() {
    this.updateEvent.next();
  }
  constructor(private route: Router) {
    // Charger les données du client depuis le localStorage au moment de l'initialisation du service
    const storedClientId = localStorage.getItem('idClient');
    if (storedClientId) {
      // Si un ID est stocké, vous pouvez charger les données de l'administrateur ici
      // this.admin1 = this.loadAdminData(storedAdminId);
    }
  }

  setClientConnecte(client: Client) {
    this.client1 = client;
    console.log("setClientConnecte", this.client1);

    // Stocker l'id du client connecté dans le localStorage
    // localStorage.setItem('idClient', this.client1.idClient.toString());
    localStorage.setItem('idClient', JSON.stringify(client));
  }

  getAdminConnecte(): Client | undefined {
    return this.client1;
  }

  deconnecter() {
    console.log("je suis dans deconnecter");

    // this.client1 = null;
    this.isAuth = false;
    localStorage.clear();
    this.route.navigate(['/login']);
    console.log("sortie deconnecter", localStorage.getItem("idAdminParking"));
  }
}
