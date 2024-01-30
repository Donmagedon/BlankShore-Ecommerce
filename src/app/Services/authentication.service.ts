import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, tap } from 'rxjs';
import { HttpInterceptor,HttpRequest,HttpResponse } from '@angular/common/http';
import { LoadUserInfoService } from './load-user-info.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
public validateSession!:LoadUserInfoService
  constructor(private http:HttpClient, validateSession: LoadUserInfoService) {
    this.validateSession = validateSession

   }
   login(username:string,password:string):Observable<any>{

    const token = this.http.post<any>("/api/login",{username:username,password:password}).pipe(map((res)=>{
      this.successfulLogin(res)
      
      return res
    }))
    return token

   }

   logout(){
    localStorage.removeItem("authToken")
    localStorage.removeItem("username")

   }
  successfulLogin(token:any = null){
    if(token){
      this.setTokenLS(token.authToken)
  
      
    }
   }

   private setTokenLS(token:string){
    localStorage.setItem("authToken",token)
   }
  
}
