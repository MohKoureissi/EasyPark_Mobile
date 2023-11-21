import { Injectable } from '@angular/core';
import { Client } from './Model/Client';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private client1: Client | undefined;

  constructor() {
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
    localStorage.setItem('idClient', this.client1.idClient.toString());
  }

  getAdminConnecte(): Client | undefined {
    return this.client1;
  }
}
