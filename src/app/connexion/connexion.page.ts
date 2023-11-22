import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage  {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private clientService: ClientService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      motdepasse: ['', Validators.required],
    });
  }

  onSubmit() { 
    if (this.loginForm.valid) {
      const login = this.loginForm.value;
      console.log(login);
     
      this.clientService.login(login.email, login.motdepasse).subscribe(
        (response: any) => {
          const idClientCon = response.idClient; 
          // console.log("ID Client :", idClientCon)
          localStorage.setItem('idClient', idClientCon); 
          console.log("Mise à jour confirmée", response.idClient)
          console.log("connexion établie", response);
          this.router.navigate(['../tabs']);
          this.loginForm.reset();
        },
        (error: any) => {
          // this.snack.openSnackBar("Mot de passe ou nom incorrect");
          console.log("erreur","Mot de passe ou nom incorrect", error);
        }
      );
    }
}

}
