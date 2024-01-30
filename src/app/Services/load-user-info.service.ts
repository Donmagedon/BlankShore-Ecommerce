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
    const stream = this.http.get<CurrentUser>("/api/userLoggedIn")
    this.setUsernameLS(stream)
    return stream


  }
  setUsernameLS(stream : Observable<any>):void{
    stream.subscribe((info)=>{
      localStorage.setItem("username",info.username)
    })
    
  }
  isLoggedIn(){
    const token = localStorage.getItem("authToken")
    const username = localStorage.getItem("username")
    return username
  }
}
