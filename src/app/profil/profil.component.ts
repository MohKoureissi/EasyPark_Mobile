import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { AuthServiceService } from '../auth-service.service';
import { Client } from '../Model/Client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent  implements OnInit {
  // client: Client| any;


  constructor(private authService: AuthServiceService,private router:Router) {
    // Récupérer l'objet client depuis le localStorage
  const storedClient = localStorage.getItem('Client');
  }
  // Vérifier si l'objet client est défini et non null
  // if (storedClient) {
  //   this.client = JSON.parse(storedClient);
  //   console.log("Client Récupéré ", this.client);
  // } else {
  //   console.error("L'objet client n'est pas défini dans le localStorage.");
  // }

  //   // console.log("Client Récuperer ", this.client);

  //  }

  ngOnInit() {
  //   this.authService.update$.subscribe(() => {
  //     // Récupérer à nouveau l'objet client depuis le localStorage après une mise à jour
  //     const storedClient = localStorage.getItem('Client');
  
  //     // Vérifier si l'objet client est défini et non null
  //     if (storedClient) {
  //       this.client = JSON.parse(storedClient);
  //     } else {
  //       console.error("L'objet client n'est pas défini dans le localStorage après la mise à jour.");
  //     }
  // });
}
deconnecter (){
  localStorage.removeItem("idClient");
  localStorage.clear();
  this.router.navigate(['/connexion']);
  
  }

}

