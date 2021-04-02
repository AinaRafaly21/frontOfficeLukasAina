import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http : HttpClient) { }

  sinscrire(utilisateur : any){
    let headers = new HttpHeaders().set("Content-type", "application/json");
    console.log("INSCRIIIPPPTIOON : ", utilisateur);
    return this.http.post('https://webserviceprojet.herokuapp.com/' + 'inscription', utilisateur, { headers : headers });
  }

  login(utilisateur : any) : any{
    let headers = new HttpHeaders().set("Content-type", "application/json");
    console.log("UTILISSAAATEEEUR :", utilisateur);
    return this.http.post('https://webserviceprojet.herokuapp.com/' + 'connexion', utilisateur, { headers : headers } );
  }

  logout(){
    let token : any = localStorage.getItem('token');
    let headers = new HttpHeaders().set("Content-type", "application/json").set('Authorization', token);
    return this.http.post('https://webserviceprojet.herokuapp.com/' + 'deconnexion', { headers : headers } );
  }
}
