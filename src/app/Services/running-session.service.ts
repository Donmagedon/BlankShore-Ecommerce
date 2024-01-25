import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor,HttpRequest,HttpResponse , HttpEvent, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RunningSessionService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const savedAuthToken = localStorage.getItem("authToken")
    if(savedAuthToken){
      const validSession = req.clone({
        headers:req.headers.set("Authorization",`Bearer ${savedAuthToken}`)
      })
      console.log(validSession)
      return next.handle(validSession)
      
    }else{
      return next.handle(req)
    }
  }
  constructor() { }
}
