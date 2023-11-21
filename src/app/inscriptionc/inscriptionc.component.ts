import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscriptionc',
  templateUrl: './inscriptionc.component.html',
  styleUrls: ['./inscriptionc.component.scss'],
})
export class InscriptioncComponent  {

  inscriptionForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private clientService: ClientService, private router: Router) {
    this.inscriptionForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      adresse: ['', Validators.required],
      confirmation: ['', Validators.required],
      email: ['', Validators.required],
      motdepasse: ['', Validators.required],
    });
  }

  onSubmit() { 
    console.log("test1");
    if (this.inscriptionForm.valid) {
      console.log("test2");
      const newInscription = this.inscriptionForm.value;

      console.log(newInscription);
      this.clientService.createClient(newInscription).subscribe(
        (response) => {
          console.log("Client Inscrit avec succès", response);
          this.router.navigate(['../tabs/tab1']);
          this.inscriptionForm.reset();
        },
        (error: any) => {
          // this.snack.openSnackBar("Mot de passe ou nom incorrect");
          console.log("erreur","Mot de passe ou nom incorrect", error);
        }
      );
    }
}

}
