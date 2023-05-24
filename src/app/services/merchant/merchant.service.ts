import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../api';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  constructor(private http:HttpClient) { }
  getMerchantData(name:string): Observable<any>{
    // let url= API.base+name+'.json' // url here
    return this.http.get(url)

  }
}
