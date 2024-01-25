import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrentUser } from '../models/current-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadUserInfoService {

  constructor(private http:HttpClient) {

   }
  loadAttributes():Observable<CurrentUser>{
    return this.http.get<CurrentUser>("/api/userLoggedIn")

  }

}
