import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, tap } from 'rxjs';
import { HttpInterceptor,HttpRequest,HttpResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) {
   }
   login(username:string,password:string):Observable<any>{
    return this.http.post<any>("/api/login",{username:username,password:password}).pipe(map((res)=>{
      this.successfulLogin(res)
      return res
    }))
   }

   logout(){
    localStorage.removeItem("authToken")
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
