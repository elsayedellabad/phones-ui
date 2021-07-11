import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Services {

  constructor(private httpClient:HttpClient) { }

  getPhonesDataFromServer(country_code, state):  any{   
    return this.httpClient.get('http://localhost/phones-app/public/api/customers' + '/' +  country_code + '/' + state);        
  }
}
