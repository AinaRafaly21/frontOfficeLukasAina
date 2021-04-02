import { BASE_URL } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableauService {

  constructor(private http : HttpClient) { }

  public getTableau(){
    let token : any = localStorage.getItem('token');
    let headers = new HttpHeaders().set("Content-type", "application/json").set('Authorization', token);
    return this.http.get(BASE_URL + 'consom', { headers : headers } );
  }
}
