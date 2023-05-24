import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { API } from '../api';


@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http:HttpClient) { }
  getStaffData(): Observable<any>{
   // let url= API.staff //url here
    return this.http.get(url)

  }
}
