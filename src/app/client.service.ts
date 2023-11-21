import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl = 'http://localhost:8080/client'; // Remplacez ceci par l'URL réelle de votre API

  constructor(private http: HttpClient) { }

  createClient(client: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, client);
  }

  getAllClients(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/read`);
  }

  getClientById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/read/${id}`);
  }

  deleteClient(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/delete/${id}`);
  }

  updateClient(client: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update`, client);
  }
  // login(email: string, motDePasse: string): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/login`, { email, motDePasse });
  // }
  login(email: string, motdepasse: string): Observable<any> {
    const body = {
      email: email,
      motdepasse: motdepasse,
    };
  
    return this.http.get(`${this.apiUrl}/login?email=${email}&motdepasse=${motdepasse}`);
  }
}
